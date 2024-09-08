"use client";
import React, { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { TailSpin } from "react-loader-spinner";
import styles from "./page.module.scss";
import InputUiKit from "../components/ui/input/InputUiKit";
import Select from "../components/ui/select/Select";
import BaseTeamLogo from "./components/BaseTeamLogo";
import { antonio, inter } from "../fonts";
import BaseIdCard from "./components/BaseIdCard";
import UploadInput from "./components/UploadInput";

interface RegisterFormValues {
  teamName: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  teamLogo: File | null;
  idCard: File | null;
}

const validationSchema = Yup.object({
  teamName: Yup.string().required("Please select a team."),
  name: Yup.string().required("Enter your name"),
  lastName: Yup.string().required("Enter your last name"),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Enter your email"),
  phoneNumber: Yup.string().required("Enter your phone number"),
  address: Yup.string().required("Enter your address"),
  postalCode: Yup.string().required("Enter your postal code"),
  teamLogo: Yup.mixed()
    .required("Team logo is required.")
    .test("fileSize", "File size is too large. Max 3MB", (value: any) => {
      return value && value.size <= 3 * 1024 * 1024;
    }),
  idCard: Yup.mixed()
    .required("ID card is required.")
    .test("fileSize", "File size is too large. Max 3MB", (value: any) => {
      return value && value.size <= 3 * 1024 * 1024;
    }),
});

export default function RegisterPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);
  const [teamLogoPreview, setTeamLogoPreview] = useState<string | null>(null);

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      teamName: "",
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
      teamLogo: null,
      idCard: null,
    },
    validationSchema,
    onSubmit: (
      values: RegisterFormValues,
      { setSubmitting }: FormikHelpers<RegisterFormValues>
    ) => {
      setLoading(true);
      setTimeout(() => {
        console.log(values);
        setLoading(false);
        setSubmitting(false);
      }, 2000);
    },
  });

  const handleIdCardChange = (name: string, file: File | null) => {
    formik.setFieldValue(name, file);
    if (file && file.size <= 3 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIdCardPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setIdCardPreview(null);
    }
  };

  const handleTeamLogoChange = (name: string, file: File | null) => {
    formik.setFieldValue(name, file);
    if (file && file.size <= 3 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTeamLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setTeamLogoPreview(null);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={antonio.className}>Register Team</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.team}>
          <div className={styles.teamLogo}>
            <label htmlFor="">Team Logo*</label>
            <div className={styles.logoInput}>
              <BaseTeamLogo
                imageSrc={teamLogoPreview}
                error={
                  formik.touched.teamLogo && formik.errors.teamLogo
                    ? formik.errors.teamLogo
                    : ""
                }
              />
              <UploadInput
                name="teamLogo"
                onChange={(name, file) => handleTeamLogoChange(name, file)}
                error={
                  formik.touched.teamLogo && formik.errors.teamLogo
                    ? formik.errors.teamLogo
                    : ""
                }
              />
            </div>
          </div>
          <div className={styles.teamInput}>
            <InputUiKit
              name="teamName"
              label="Team Name*"
              type="text"
              value={formik.values.teamName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.teamName && formik.errors.teamName
                  ? formik.errors.teamName
                  : ""
              }
            />
            <Select
            // Uncomment and customize Select options when ready
            // name="teamName"
            // label="Team Name*"
            // value={formik.values.teamName}
            // onChange={(value: string) =>
            //   formik.setFieldValue("teamName", value)
            // }
            // onBlur={formik.handleBlur}
            // options={[
            //   {
            //     value: "sporthalle_1",
            //     label: "Sporthalle Viktring Klagenfurt",
            //   },
            //   { value: "stadthalle_2", label: "Stadthalle Steyr" },
            //   { value: "stadium_3", label: "Another Stadium" },
            //   { value: "stadium_4", label: "Yet Another Stadium" },
            // ]}
            // error={
            //   formik.touched.teamName && formik.errors.teamName
            //     ? formik.errors.teamName
            //     : ""
            // }
            />
          </div>
        </div>

        <div className={styles.information}>
          <InputUiKit
            name="name"
            label="Name*"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : ""
            }
          />
          <InputUiKit
            name="lastName"
            label="Last Name*"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : ""
            }
          />
          <InputUiKit
            name="email"
            label="Email*"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""
            }
          />
          <InputUiKit
            name="phoneNumber"
            label="Phone Number*"
            type="text"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && formik.errors.phoneNumber
                ? formik.errors.phoneNumber
                : ""
            }
          />
          <InputUiKit
            name="address"
            label="Address*"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.address && formik.errors.address
                ? formik.errors.address
                : ""
            }
          />
          <InputUiKit
            name="postalCode"
            label="Postal Code*"
            type="text"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.postalCode && formik.errors.postalCode
                ? formik.errors.postalCode
                : ""
            }
          />
        </div>

        <div className={styles.idCard}>
          <label htmlFor="">ID Card*</label>
          <div className={styles.idCardInput}>
            <BaseIdCard
              error={
                formik.touched.idCard && formik.errors.idCard
                  ? formik.errors.idCard
                  : ""
              }
              imageSrc={idCardPreview}
            />
            <UploadInput
              name="idCard"
              onChange={(name, file) => handleIdCardChange(name, file)}
              error={
                formik.touched.idCard && formik.errors.idCard
                  ? formik.errors.idCard
                  : ""
              }
            />
          </div>
        </div>

        <p>
          By submitting, you agree to the AGB and confirm your irrevocable
          registration.
        </p>

        <button
          className={`${styles.submit} ${loading ? styles.SubmitLoad : ""}`}
          type="submit"
          disabled={formik.isSubmitting}
        >
          {loading && (
            <TailSpin
              visible={true}
              height="18"
              width="18"
              color="#f8f8f8"
              ariaLabel="tail-spin-loading"
              radius="1"
            />
          )}
          <span className={inter.className}>Submit</span>
        </button>
      </form>
    </div>
  );
}
