import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./style.module.css";

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  userName: Yup.string()
    .min(10, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(20, "Too Long!")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Required"),
  confirmPass: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  toggle: Yup.bool().oneOf([true], "Required"),
});

const FormSignup = () => (
  <div className={styles.container}>
    <h3>Signup</h3>
    <Formik
      initialValues={{
        fullName: "",
        userName: "",
        email: "",
        password: "",
        confirmPass: "",
        toggle: false,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {}}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label htmlFor="fullName">Full Name</label>
          <Field name="fullName" className="form-control" />
          {errors.fullName && touched.fullName && (
            <small>{errors.fullName}</small>
          )}
          <label htmlFor="userName">Username</label>
          <Field name="userName" className="form-control" />
          {errors.userName && touched.userName && (
            <small>{errors.userName}</small>
          )}
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="form-control" />
          {errors.email && touched.email && <small>{errors.email}</small>}
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" className="form-control" />
          {errors.password && touched.password && (
            <small>{errors.password}</small>
          )}
          <label htmlFor="confirmPass">Confirm Password</label>
          <Field name="confirmPass" type="password" className="form-control" />
          {errors.confirmPass && touched.confirmPass && (
            <small>{errors.confirmPass}</small>
          )}
          <label htmlFor="toggle">
            <Field type="checkbox" name="toggle" /> I have read and agree to the
            Terms
          </label>
          {errors.toggle && touched.toggle && <small>{errors.toggle}</small>}
          <div className={styles.btnBottom}>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
            <button className="btn btn-warning" type="reset">
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
export default FormSignup;
