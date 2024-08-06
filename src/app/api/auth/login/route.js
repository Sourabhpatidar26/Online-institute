import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "../../../../schemas/User";
import createJWT from "../../../../JWT/createJWT";
import connectToDatabase from "../../../../_database/mongodb";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: "Please provide both email and password" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 404 }
      );
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      role:user.role
    };
    const token = createJWT(tokenData);

    const expirationTimeInHours = 1;
    const expirationTimeInSeconds = expirationTimeInHours * 3600;

    await User.updateOne({ _id: user._id }, { lastLoginAt: new Date() });

    const headers = {
      "Set-Cookie": `token=${token}; HttpOnly; Max-Age=${expirationTimeInSeconds}; Path=/`,
    };

    return NextResponse.json(
      { message: "Logged in successfully!" },
      { headers }
    );
  } catch (error) {
    console.error("Error during login:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
