import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./style.module.css";
import { useDispatch } from "react-redux";
import { addOrUpdateRecipe } from "../../store/actions";
import { useLocation, useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});

const MyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  let name: string = "";
  let image: string = "";
  let description: string = "";
  let id: number = -1;
  if (state) {
    id = state.id;
    name = state.name;
    image = state.image;
    description = state.description;
  }
  const handleCancel = () => {
    navigate("/recipes");
  };
  return (
    <div>
      <Formik
        initialValues={{
          name,
          image,
          description,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          const { name, description, image } = values;
          dispatch(addOrUpdateRecipe(id, name, description, image));
          navigate("/recipes");
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={styles.container}>
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
            <img
              src={values?.image}
              alt="Preview"
              style={{ marginTop: "5px" }}
            />
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
