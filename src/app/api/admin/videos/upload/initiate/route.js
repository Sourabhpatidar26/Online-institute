import { NextResponse } from "next/server";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  useAccelerateEndpoint: false,
  httpOptions: {
    timeout: 300000, // 5 minutes
    connectTimeout: 300000, // 5 minutes
  },
});

export async function POST(request) {
  try {
    const { filename } = await request.json();

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: filename,
    };

    const data = await s3.createMultipartUpload(params).promise();

    return NextResponse.json({ uploadId: data.UploadId });
  } catch (error) {
    console.error("Error during login:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
