import React from "react";
import { Form } from "react-router-dom";

const MyForm = () => {
  return (
    <Form method="post" action="/recipes/form ">
      <button className="btn btn-success" type="submit">
        Save
      </button>
      <input type="email" name="email" required />
      <textarea name="message" required />
    </Form>
  );
};
export const contactAction = async ({ request }: any) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // const submission = {
  //   email: formData.get("email"),
  //   message: formData.get("message"),
  // };
  // console.log(submission);
  return { data };
};

export default MyForm;
