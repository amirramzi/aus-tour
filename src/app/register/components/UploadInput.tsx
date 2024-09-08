"use client";
import React, { useRef } from "react";
import { UploadIcon } from "@/app/components/icon/UploadIcon";
import style from "./UploadInput.module.scss";

const Upload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    console.log(files);

    event.target.value = "";
  };
  return (
    <div className={style.wrapper}>
      <button className={style.btn} onClick={handleButtonClick}>
        <UploadIcon />
        <span>Upload Image</span>
      </button>
      <p>*.png, *.jpeg, files up to 3MB.</p>
      {/* <div className={style.error}>Upload failed.</div> */}
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Upload;
