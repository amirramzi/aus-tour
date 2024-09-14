"use client";
import React, { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import BaseTeamLogo from "../BaseTeamLogo";
import UploadInput from "../UploadInput";
import InputUiKit from "@/app/components/ui/input/InputUiKit";
import Select from "@/app/components/ui/select/Select";
import BaseIdCard from "../BaseIdCard";
import { antonio, inter } from "@/app/fonts";
import styles from "./Form.module.scss";
import SubmitButton from "./SubmitButton";
import CheckBox from "@/app/components/ui/check-box/CheckBox";
import axios from "axios";
interface FormProps {
  setIsOpenRegistered: (open: boolean) => void;
  setIsOpenDeleteLogo: (open: boolean) => void;
  setIsOpenDeleteIdCard: (open: boolean) => void;
  logoInputRef: React.RefObject<{ trashHandler: () => void }>;
  idCardInputRef: React.RefObject<{ trashHandler: () => void }>;
}

interface RegisterFormValues {
  teamName: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  teamLogo?: File | null;
  idCard: File | null;
  stadium: string;
  agreement: false;
}

const validationSchema = Yup.object({
  teamName: Yup.string().required("Enter your team name.").max(255),
  name: Yup.string().required("Enter your name").max(255),
  lastName: Yup.string().required("Enter your last name").max(255),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Enter your email"),
  phoneNumber: Yup.string().required("Enter your phone number"),
  address: Yup.string().required("Enter your address").max(255),
  postalCode: Yup.string().required("Enter your postal code"),
  teamLogo: Yup.mixed()
    .notRequired()
    .test("fileSize", "File size is too large. Max 3MB", (value: any) => {
      if (!value) return true;
      return value.size <= 3 * 1024 * 1024;
    }),

  idCard: Yup.mixed()
    .required("ID card is required.")
    .test("fileSize", "File size is too large. Max 3MB", (value: any) => {
      return value && value.size <= 3 * 1024 * 1024;
    }),
  stadium: Yup.string().required("Please select a stadium."),
  agreement: Yup.bool().oneOf([true], "Field must be checked"),
});
const Form: React.FC<FormProps> = ({
  setIsOpenRegistered,
  logoInputRef,
  setIsOpenDeleteLogo,
  setIsOpenDeleteIdCard,
  idCardInputRef,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [idCardPreview, setIdCardPreview] = useState<string | null>(null);
  const [teamLogoPreview, setTeamLogoPreview] = useState<string | null>(null);

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      teamName: "",
      stadium: "",
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
      teamLogo: null,
      idCard: null,
      agreement: false,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value as Blob | string);
        });

        const result = await axios.post(
          "http://localhost:3001/api/submit-form",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        if (result.status == 201) {
          setTimeout(() => {
            setIsOpenRegistered(true);
          }, 200);
          setIsOpenRegistered(true);
        }
      } catch (error: any) {
        console.log(error.response?.data || error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
          setSubmitting(false);
        }, 2000);
      }
    },
  });

  const handleIdCardChange = (name: string, file: File | null) => {
    formik.setFieldValue(name, file);
    if (file) {
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
    if (file) {
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
      <form onSubmit={formik.handleSubmit} className={inter.className}>
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
                onClick={() => setIsOpenDeleteLogo(true)}
                trash={teamLogoPreview}
                onChange={(name, file) => handleTeamLogoChange(name, file)}
                error={
                  formik.touched.teamLogo && formik.errors.teamLogo
                    ? formik.errors.teamLogo
                    : ""
                }
                ref={logoInputRef}
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
              name="stadium"
              label="Stadium*"
              value={formik.values.stadium}
              onChange={(value: string) =>
                formik.setFieldValue("stadium", value)
              }
              onBlur={formik.handleBlur}
              options={[
                { value: "Sporthalle Viktring Klagenfurt" },
                { value: "Stadthalle Steyr1" },
                { value: "Stadthalle Steyr2" },
                { value: "Stadthalle Steyr3" },
              ]}
              error={
                formik.touched.stadium && formik.errors.stadium
                  ? formik.errors.stadium
                  : ""
              }
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
            place="example@example.com"
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
            type="number"
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
              trash={idCardPreview}
              onClick={() => setIsOpenDeleteIdCard(true)}
              onChange={(name, file) => handleIdCardChange(name, file)}
              error={
                formik.touched.idCard && formik.errors.idCard
                  ? formik.errors.idCard
                  : ""
              }
              ref={idCardInputRef}
            />
          </div>
        </div>

        <div className={styles.checkbox}>
          <CheckBox
            name="agreement"
            checked={formik.values.agreement}
            onChange={formik.handleChange}
          />
          <div>
            <p>
              By submitting, you agree to the AGB and confirm your irrevocable
              registration.
            </p>
            {formik.touched.agreement && formik.errors.agreement && (
              <span className={styles.checkError}>
                {formik.errors.agreement}
              </span>
            )}
          </div>
        </div>
        <div className={styles.submit}>
          <SubmitButton
            label="Submit"
            type="submit"
            disabled={formik.isSubmitting}
            loading={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
