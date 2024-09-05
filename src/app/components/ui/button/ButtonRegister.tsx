"use client";

import React from "react";
import Arrow from "../../icon/Arrow";
import styles from "./ButtonRegister.module.scss";

const ButtonRegister = ({ ...props }: React.ComponentProps<"button">) => {
  return (
    <button {...props} className={styles.button}>
      <span className={styles.label}>Register Your Team</span>
      <div className={styles.icon}>
        <Arrow />
      </div>
    </button>
  );
};

export default ButtonRegister;
