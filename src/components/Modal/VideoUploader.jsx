"use client";

import { Fragment, useState } from "react";
import "./modal.scss";
import CloseIcon from "../../assets/images/svg/closeIcon.svg";
import Image from "next/image";
import Button from "../Button";
import Uploader from "../Uploader";
import Typography from "../Typography";
import Input from "../Input";

const VideoUploader = ({
  id,
  showModal,
  setShowModal,
  modalImage,
  modalTitle,
  modalText,
  btnPrimaryLabel,
  btnSecondaryLabel,
  className,
}) => {
  const [progress, setProgress] = useState(0);

  const [file, setFile] = useState(null);
  const closeModal = () => {
    setShowModal(false);
  };

  const handleChangeVideo = (event) => {
    const selectedFile = event;
    if (selectedFile && selectedFile.type === "video/mp4") {
      setFile(selectedFile);
    } else {
      alert("Please select an MP4 file.");
      setFile(null);
    }
  };

  const handleUploadVideo = async () => {
    if (!file) {
      alert("No file selected");
      return;
    }

    const filename = `${Date.now()}`;
    const this500MB = 524288000;
    let chunkMb = 10
    if(file.size > this500MB){
      chunkMb = 50;
    }

    const CHUNK_SIZE = chunkMb * 1024 * 1024;
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    const { uploadId } = await initiateMultipartUpload(filename);
    setProgress(1);

    const parts = [];

    for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
      const start = chunkIndex * CHUNK_SIZE;
      const end = Math.min((chunkIndex + 1) * CHUNK_SIZE, file.size);
      const chunk = file.slice(start, end);

      const part = await uploadChunk(
        filename,
        uploadId,
        chunkIndex + 1,
        chunk
      );
      parts.push({ ETag: part.ETag, PartNumber: chunkIndex + 1 });

      // Update progress
      setProgress(Math.round(((chunkIndex + 1) / totalChunks) * 100));
    }

    await completeMultipartUpload(filename, uploadId, parts);
    alert("Upload complete");
    setProgress(0); // Reset progress
  };

  const initiateMultipartUpload = async (filename) => {
    const response = await fetch(`/api/admin/videos/upload/initiate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename }),
    });
    const result = await response.json();
    return result;
  };

  const uploadChunk = async (filename, uploadId, partNumber, chunk) => {
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("uploadId", uploadId);
    formData.append("partNumber", partNumber);
    formData.append("chunk", chunk);

    const response = await fetch(`/api/admin/videos/upload/chunk`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  };

  const completeMultipartUpload = async (filename, uploadId, parts) => {
    const response = await fetch(`/api/admin/videos/upload/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename, uploadId, parts }),
    });
    const data = await response.json();
    return data;
  };

  return (
    <Fragment>
      {showModal && (
        <dialog id="uploader" className="modal" open={showModal}>
          <div className="modal-box rounded-none py-10 bg-primary-content max-w-5xl w-full card-frame">
            {/* close button */}
            <Button
              size="btn-sm"
              variant="btn-ghost"
              className="absolute right-2 top-2"
              iconPosition="left"
              icon={CloseIcon}
              onClick={closeModal}
            ></Button>
            <Typography
              tag="h4"
              size="text-3xl"
              weight="font-semibold"
              color="text-base-content"
              className="block text-center mb-2"
            >
              Edit video Details
            </Typography>
            <Typography
              tag="p"
              size="text-base"
              weight="font-medium"
              color="text-base-200"
              className="block text-center mb-4"
            >
              For best results, video uploads should be at least 1080 (1920x1080
              pixels) in MP4 format.
            </Typography>
            <Input type="date" className="input-sm max-w-48 w-full" />
            <div className="grid grid-cols-2 gap-3">
              <Uploader
                filename={file?.name}
                title="Browse or drag and drop video files to upload"
                fileTypes={["Mp4"]}
                multiple={false}
                onChange={handleChangeVideo}
              />
              <Uploader
                title="Browse or drag and drop Thumbnail"
                fileTypes={["jpg"]}
              />
            </div>
            {progress > 0 && (
              <>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Task in progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      style={{width:`${progress}%`}}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                    {/* <div
                      style="width: 15%"
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                    ></div>
                    <div
                      style="width: 25%"
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
                    ></div> */}
                  </div>
                </div>
              </>
            )}
            <Button onClick={handleUploadVideo}>Upload</Button>
          </div>
        </dialog>
      )}
    </Fragment>
  );
};

export default VideoUploader;
