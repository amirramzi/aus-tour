"use client";
import React from "react";
import styles from "./OutlineButton.module.scss";
import Arrow from "../../icon/Arrow";

interface OutlineButtonProps {
  label?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  label,
  icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${icon ? styles.btnIcon : ""}`}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};

export default OutlineButton;
