import { NextResponse } from "next/server";


export async function GET(request) {
  const loggedUserId = request.headers.get("x-user-id");
  try {
 
    return NextResponse.json({
      message: "User Found",
      data: "data[0]",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  try {
    const userId = params.id;
    const form = await request?.formData();
    const avatar = form.get("avatar");
    const username = form.get("username");
    const fullName = form.get("fullName");
    const email = form.get("email");
    const bio = form.get("bio");
    const isPrivate = form.get("isPrivate");

    const currentPassword = form.get("currentPassword");
    const newPassword = form.get("newPassword");
    const confirmPassword = form.get("confirmPassword");

    if (currentPassword && newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) {
        return NextResponse.json(
          { error: "password not matched" },
          { status: 404 }
        );
      }
    }

    const user = await Users.findById(userId).select(
      "-createdAt -__v -lastLoginAt"
    );

    if (currentPassword && newPassword && confirmPassword) {
      const isMatch = await bcryptjs.compare(currentPassword, user.password);

      if (!isMatch) {
        return NextResponse.json(
          { error: "Current password is wrong" },
          { status: 401 }
        );
      }
      const hashedPassword = await bcryptjs.hash(newPassword, 10);
      user.password = hashedPassword;
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (avatar) {
      const fileStream = Buffer.from(await avatar.arrayBuffer());
      const base64Data = fileStream.toString("base64");
      const finalData = `data:video/mp4;base64,` + base64Data;

      const avatarResult = await uploadImage(finalData, {
        folder: "/Instello/Avatar",
        transformation: {
          quality: "auto", // Automatically optimize image quality
          aspect_ratio: 1, // Ensure square profile picture (optional)
          width: 300, // Resize to 200px width (can be adjusted)
          height: 300, // Resize to 200px height (can be adjusted)
          gravity: "face", // Center the image within the resized frame
          crop: "fill", // Fill the entire frame (or use 'fit' for letterboxing)
          quality: 70,
        },
      });
      user.avatar = avatarResult;
    }

    if (username) {
      const data = await Users.findOne({
        _id: { $ne: user._id },
        username: username,
      });

      if (data) {
        return NextResponse.json(
          { error: "Username already exists" },
          { status: 409 }
        );
      }
      user.username = username;
    }

    if (email) {
      const data = await Users.findOne({
        _id: { $ne: user._id },
        email: email,
      });

      if (data) {
        return NextResponse.json(
          { error: "Email already exists" },
          { status: 409 }
        );
      }
      user.email = email;
    }

    if (bio) {
      user.bio = bio ? bio : "";
    }

    if (fullName) {
      user.fullName = fullName;
    }

    user.updatedAt = Date.now();
    await user.save();

    return NextResponse.json({
      message: "Update user",
      data: { avatar: user.avatar },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
