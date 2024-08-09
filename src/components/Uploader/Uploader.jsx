import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import './uploader.scss'

// const fileTypes = ["JPEG", "PNG", "GIF"];
// const fileTypes = ["Mp4"]
export default function Uploader({title, fileTypes, multiple, classes}) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div className="App">
      <FileUploader
        multiple={multiple}
        handleChange={handleChange}
        name="file"
        types= {fileTypes}
        label= {title}
        classes= {`custom-uploader ${classes}`}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}
