import connectToDatabase from "@/_database/mongodb";
import { generateRandomUsername } from "@/helpers/Backend";
import User from "@/schemas/User";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
    const { userId } = params;

    if (userId !== "new") {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const { firstName, lastName, email, password, phoneNumber } =
      await request.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: "Please fill all required fields" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const isAlreadyExist = await User.findOne({ email });
    if (isAlreadyExist) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    let userName;
    do {
      userName = generateRandomUsername(firstName, lastName);
    } while (await User.findOne({ userName }));

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully", userId: newUser._id },
      { status: 201 }
    );
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const { userId } = params;

    await connectToDatabase();

    const user = await User.findById(userId).select(
      "-password -createdAt -__v -lastLoginAt"
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { userId } = params;

    console.log(userId);

    const {
      firstName,
      lastName,
      userName,
      email,
      profilePicture,
      phoneNumber,
      newPassword,
      confirmPassword,
    } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is missing in the request headers" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    if (!userName) {
      return NextResponse.json(
        { error: "userName is required" },
        { status: 400 }
      );
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const user = await User.findById(userId).select(
      "-password -createdAt -__v -lastLoginAt"
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (newPassword) {
      user.password = await bcryptjs.hash(newPassword, 10);
    }

    if (profilePicture) {
    }

    if (userName) {
      const existingUserName = await User.findOne({
        _id: { $ne: user._id },
        userName,
      });

      if (existingUserName) {
        return NextResponse.json(
          { error: "Username already exists" },
          { status: 409 }
        );
      }
      user.userName = userName;
    }

    if (email) {
      const existingEmail = await User.findOne({
        _id: { $ne: user._id },
        email,
      });

      if (existingEmail) {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 409 }
        );
      }
      user.email = email;
    }

    // Update other fields if provided
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (phoneNumber) user.phoneNumber = phoneNumber;

    user.updatedAt = Date.now();
    await user.save();

    return NextResponse.json({
      message: "Updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { userId } = params;

    const user = await User.findByIdAndDelete({ _id: userId });
    if (!user) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
