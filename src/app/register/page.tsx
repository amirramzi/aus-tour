"use client";
import React, { useState } from "react";
import Form from "./components/form/Form";
import NavFoot from "../components/layout/NavFoot";
import Modal from "../components/ui/modal/Modal";
import SubmitButton from "./components/form/SubmitButton";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isOpenRegistered, setIsOpenRegistered] = useState<boolean>(false);
  const [isOpenDeleteLogo, setIsOpenDeleteLogo] = useState<boolean>(false);
  const [isOpenDeleteIdCard, setIsOpenDeleteIdCard] = useState<boolean>(false);
  const router = useRouter();
  const redirectHandler = () => {
    router.push("/");
  };
  return (
    <>
      <Modal
        isOpen={isOpenRegistered}
        onClose={setIsOpenRegistered}
        title="Registered!"
        content="Welcome to the community! Stay tuned for exciting updates and news
          from Sunglas Sportarena."
      >
        <SubmitButton label="Confirm" onClick={redirectHandler} />
      </Modal>
      <Modal
        isOpen={isOpenDeleteLogo}
        onClose={setIsOpenDeleteLogo}
        title="Delete"
        content="Delete the logo team?"
      >
        <SubmitButton label="Confirm" onClick={redirectHandler} />
      </Modal>
      <NavFoot>
        <Form setIsOpenRegistered={setIsOpenRegistered} />
      </NavFoot>
    </>
  );
}
