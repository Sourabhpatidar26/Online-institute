import connectToDatabase from "@/_database/mongodb";
import User from "@/schemas/User";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const nextPage =
      parseInt(request.nextUrl?.searchParams.get("page"), 10) || 0;
    const pageSize = 10;
    const skipCount = nextPage * pageSize;

    await connectToDatabase();

    const users = await User.find()
      .select("-password -createdAt -__v -lastLoginAt")
      .limit(pageSize)
      .skip(skipCount)
      .lean()
      .exec();

    return NextResponse.json(users);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
