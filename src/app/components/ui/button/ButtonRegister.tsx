"use client";

import React from "react";
import Arrow from "../../icon/Arrow";
import styles from "./ButtonRegister.module.scss";
import { useRouter } from "next/navigation";

const ButtonRegister = ({ ...props }: React.ComponentProps<"button">) => {
  const router = useRouter();
  const pushHandler = () => {
    router.push("/register");
  };
  return (
    <button {...props} className={styles.button} onClick={pushHandler}>
      <span className={styles.label}>Register Your Team</span>
      <div className={styles.icon}>
        <Arrow />
      </div>
    </button>
  );
};

export default ButtonRegister;
