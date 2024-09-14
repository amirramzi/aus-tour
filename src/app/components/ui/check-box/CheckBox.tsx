"use client";
import React, { InputHTMLAttributes } from "react";
import styles from "./CheckBox.module.scss";
import Check from "../../icon/Check";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

const CheckBox: React.FC<CheckBoxProps> = ({ ...props }) => {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      <div className={styles.customCheckbox}>{props.checked && <Check />}</div>
    </label>
  );
};

export default CheckBox;
