import React from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./SubmitButton.module.scss";
interface SubmitButtonProps {
  type?: "submit" | "button";
  disabled?: boolean;
  loading?: boolean;
  label: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  type,
  disabled,
  loading,
  label,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.submit} ${loading ? styles.SubmitLoad : ""}`}
      type={type}
      disabled={disabled}
    >
      {loading && (
        <TailSpin
          visible={true}
          height="18"
          width="18"
          color="#f8f8f8"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="spinner"
        />
      )}
      {label}
    </button>
  );
};

export default SubmitButton;
