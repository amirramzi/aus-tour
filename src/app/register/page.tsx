"use client";
import React from "react";
import InputUiKit from "../components/ui/input/InputUiKit";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import styles from "./page.module.scss";
interface RegisterFormValues {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Enter your email"),
});

export default function RegisterPage() {
  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: (
      values: RegisterFormValues,
      { setSubmitting }: FormikHelpers<RegisterFormValues>
    ) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
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
        {/* <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button> */}
      </form>
    </div>
  );
}
