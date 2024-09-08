"use client";
import React, { useRef } from "react";
import { UploadIcon } from "@/app/components/icon/UploadIcon";
import styles from "./UploadInput.module.scss";
import Trash from "@/app/components/icon/Trash";

interface UploadInputProps {
  name: string;
  error?: string;
  onChange: (name: string, file: File | null) => void;
  trash?: any;
}

const UploadInput: React.FC<UploadInputProps> = ({
  name,
  onChange,
  error,
  trash,
}) => {
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
  const trashHandler = () => {
    onChange(name, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.btnWrapper}>
        <button
          className={styles.btn}
          onClick={handleButtonClick}
          type="button"
        >
          <UploadIcon />
          <span>Upload Image</span>
        </button>
        {trash && (
          <button onClick={trashHandler} className={styles.trash}>
            <Trash />
          </button>
        )}
      </div>
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
