"use client";
import React from "react";
import styles from "./OutlineButton.module.scss";


interface OutlineButtonProps {
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
  icon?: React.ReactNode;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  label,
  icon,
  onClick,
  style,
}) => {
  return (
    <button
      type="button"
      style={style}
      onClick={onClick}
      className={`${styles.btn} ${icon ? styles.btnIcon : ""}`}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};

export default OutlineButton;
