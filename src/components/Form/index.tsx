import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../store/actions";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const MyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/recipes");
  };
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
          const { name, description, image } = values;
          dispatch(addRecipe(name, description, image));
          navigate("/recipes");
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={styles.container}>
            {/* <Field com rows="4" value={""}></Field> */}
            <div>
              <button type="submit" className="btn btn-success">
                Save
              </button>{" "}
              <button className="btn btn-danger" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            <label htmlFor="">Name</label>
            <Field name="name" className="form-control" />
            {errors.name && touched.name && <small>{errors.name}</small>}
            <label htmlFor="">Image URL</label>
            <Field name="image" className="form-control" />
            {errors.image && touched.image && <small>{errors.image}</small>}
            {values.image && (
              <img
                src={values.image}
                alt="Preview"
                style={{ marginTop: "5px" }}
              />
            )}
            <label htmlFor="">Description</label>
            <Field
              name="description"
              component="textarea"
              rows="3"
              className="form-control"
            />
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
