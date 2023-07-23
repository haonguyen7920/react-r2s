import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./style.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const MyForm = () => {
  // const [imageUrl, setImageUrl] = useState("");
  // const handleInputChange = (e: any) => {
  //   setImageUrl(e.target.value);
  // };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          image: "",
          description: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={styles.container}>
            <div>
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button className="btn btn-danger">Cancel</button>
            </div>
            <label htmlFor="">Name</label>
            <Field name="name" className="form-control" />
            {errors.name && touched.name && <small>{errors.name}</small>}
            <label htmlFor="">Image URL</label>
            <Field name="image" className="form-control" />
            {errors.image && touched.image && <small>{errors.image}</small>}
            {values.image && <img src={values.image} alt="Preview" />}
            <label htmlFor="">Description</label>
            <Field name="description" type="text" className="form-control" />
            {errors.description && touched.description && (
              <small>{errors.description}</small>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
