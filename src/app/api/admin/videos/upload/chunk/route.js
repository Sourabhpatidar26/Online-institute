import { NextResponse } from "next/server";
import express from "express";
import fileUpload from "express-fileupload";
import AWS from "aws-sdk";

const app = express();

app.use(fileUpload());

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
    const form = await request.formData();
    const filename = form.get("filename");
    const uploadId = form.get("uploadId");
    const partNumber = form.get("partNumber");
    const chunk = form.get("chunk");

    const chunkBuffer = Buffer.from(await chunk.arrayBuffer());

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: filename,
      PartNumber: parseInt(partNumber, 10),
      UploadId: uploadId,
      Body: chunkBuffer,
    };

    const data = await s3.uploadPart(params).promise();

    return NextResponse.json({ ETag: data.ETag });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
