import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connectToDatabase from "@/lib/mongodb";
import User from "@/schemas/User";
import createJWT from "@/JWT/createJWT";

export async function POST(request) {
  try {
    let reqBody;
    try {
      reqBody = await request.json();
    } catch (error) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
    
    await connectToDatabase();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide both email and password" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
    };

    const token = createJWT(tokenData);

    const expirationTimeInHours = 1;
    const expirationTimeInSeconds = expirationTimeInHours * 3600; // Convert hours to seconds

    await User.updateOne({ _id: user._id }, { lastLoginAt: new Date() });

    const headers = {
      "Set-Cookie": `token=${token}; HttpOnly=true; Max-Age=${expirationTimeInSeconds}; Path=/`,
    };

    return NextResponse.json(
      { message: "Logged in successfully!" },
      { headers }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
