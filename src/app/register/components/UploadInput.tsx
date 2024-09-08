"use client";
import React, { useRef } from "react";
import { UploadIcon } from "@/app/components/icon/UploadIcon";
import styles from "./UploadInput.module.scss";

interface UploadInputProps {
  name: string;
  error?: string;
  onChange: (name: string, file: File | null) => void;
}

const UploadInput: React.FC<UploadInputProps> = ({ name, onChange, error }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const file = files && files[0] ? files[0] : null;
    onChange(name, file);
    event.target.value = "";
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn} onClick={handleButtonClick} type="button">
        <UploadIcon />
        <span>Upload Image</span>
      </button>
      <p>*.png, *.jpeg, files up to 3MB.</p>
      {error && <div className={styles.error}>{error}</div>}
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".png, .jpeg, .jpg"
      />
    </div>
  );
};

export default UploadInput;
