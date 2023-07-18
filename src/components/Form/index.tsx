import React from "react";
import { Form } from "react-router-dom";

const MyForm = () => {
  return (
    <Form method="post" action="/recipes">
      <button className="btn btn-success" type="submit">
        Save
      </button>
      <input type="email" name="email" required />
      <textarea name="message" required />
    </Form>
  );
};
export const recipeAction = async ({ request }: any) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const message = formData.get("message");
  return { email, message };
};

export default MyForm;
