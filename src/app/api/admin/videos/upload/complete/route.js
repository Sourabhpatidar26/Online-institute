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
  const { filename, uploadId, parts } = await request.json();

  try {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: filename,
      UploadId: uploadId,
      MultipartUpload: {
        Parts: parts.map((part, index) => ({
          ETag: part.ETag,
          PartNumber: index + 1,
        })),
      },
    };

    const data = await s3.completeMultipartUpload(params).promise();

    return NextResponse.json({ location: data.Location });
  } catch (e) {
    console.log(e);
    return NextResponse.json(e, { status: 500 });
  }
}
