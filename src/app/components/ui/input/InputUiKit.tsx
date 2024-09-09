"use client";
import React from "react";
import styles from "./InputUiKit.module.scss";

interface InputProps {
  name: string;
  label: string;
  type: "email" | "text" | "number";
  value: string;
  error?: string;
  place?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const InputUiKit: React.FC<InputProps> = ({
  name,
  label,
  type,
  value,
  error,
  place,
  onChange,
  onBlur,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${styles.input} ${error ? styles.errorInput : ""}`}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={place}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default InputUiKit;
