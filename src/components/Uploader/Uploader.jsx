import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./uploader.scss";

// const fileTypes = ["JPEG", "PNG", "GIF"];
// const fileTypes = ["Mp4"]

export default function Uploader({
  filename,
  title,
  fileTypes,
  multiple,
  classes,
  onChange,
}) {
  return (
    <div className="App">
      <FileUploader
        multiple={multiple}
        handleChange={onChange}
        name="file"
        types={fileTypes}
        label={title}
        classes={`custom-uploader ${classes}`}
      />
      <p>{filename ? `File name: ${filename}` : "no files uploaded yet"}</p>
    </div>
  );
}
