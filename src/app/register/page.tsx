"use client";
import React, { useState, useRef } from "react";
import Form from "./components/form/Form";
import NavFoot from "../components/layout/NavFoot";
import Modal from "../components/ui/modal/Modal";
import SubmitButton from "./components/form/SubmitButton";
import { useRouter } from "next/navigation";
import OutlineButton from "../components/ui/button/OutlineButton";

export default function RegisterPage() {
  const [isOpenRegistered, setIsOpenRegistered] = useState<boolean>(false);
  const [isOpenDeleteLogo, setIsOpenDeleteLogo] = useState<boolean>(false);
  const [isOpenDeleteIdCard, setIsOpenDeleteIdCard] = useState<boolean>(false);
  const router = useRouter();

  const logoInputRef = useRef<{ trashHandler: () => void } | null>(null);
  const idCardInputRef = useRef<{ trashHandler: () => void } | null>(null);

  const redirectHandler = () => {
    router.push("/");
  };

  const cancelHandlerLogo = () => {
    setIsOpenDeleteLogo(false);
  };

  const deleteLogoHandler = () => {
    if (logoInputRef.current) {
      logoInputRef.current.trashHandler();
    }
    setIsOpenDeleteLogo(false);
  };
  const deleteIdCardHandler = () => {
    if (idCardInputRef.current) {
      idCardInputRef.current.trashHandler();
    }
    setIsOpenDeleteIdCard(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpenRegistered}
        onClose={setIsOpenRegistered}
        title="Registered!"
        content="Welcome to the community! Stay tuned for exciting updates and news from Sunglas Sportarena."
      >
        <SubmitButton label="Confirm" onClick={redirectHandler} />
      </Modal>
      <Modal
        isOpen={isOpenDeleteLogo}
        onClose={setIsOpenDeleteLogo}
        title="Delete"
        content="Delete the logo team?"
      >
        <OutlineButton
          label="Cancel"
          style={{ marginRight: "16px" }}
          onClick={cancelHandlerLogo}
        />
        <OutlineButton label="Delete" onClick={deleteLogoHandler} />
      </Modal>
      <Modal
        isOpen={isOpenDeleteIdCard}
        onClose={setIsOpenDeleteIdCard}
        title="Delete"
        content="Delete your ID Card?"
      >
        <OutlineButton
          label="Cancel"
          style={{ marginRight: "16px" }}
          onClick={() => setIsOpenDeleteIdCard(false)}
        />
        <OutlineButton label="Delete" onClick={deleteIdCardHandler} />
      </Modal>
      <NavFoot>
        <Form
          setIsOpenRegistered={setIsOpenRegistered}
          setIsOpenDeleteLogo={setIsOpenDeleteLogo}
          setIsOpenDeleteIdCard={setIsOpenDeleteIdCard}
          logoInputRef={logoInputRef}
          idCardInputRef={idCardInputRef}
        />
      </NavFoot>
    </>
  );
}
