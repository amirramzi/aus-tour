import React from "react";
import styles from "./Modal.module.scss";
import { inter } from "@/app/fonts";

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  content?: string;
  onClose?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  content,
  children,
}) => {
  //   const closeHandler = () => {
  //     if (onClose) {
  //       onClose(false);
  //     }
  //   };

  return (
    <div
      className={styles.backDrop}
      style={isOpen ? { display: "flex" } : { display: "none" }}
      //onClick={closeHandler}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.boxRadial} />
        <h3 className={inter.className}>{title}</h3>
        <p className={inter.className}>{content}</p>
        <div className={styles.btn}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
