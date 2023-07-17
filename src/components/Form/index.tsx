import React from "react";
import { Form, redirect } from "react-router-dom";

const MyForm = () => {
  return (
    <Form method="post" action="/recipes/form">
      <input type="email" name="email" required />
      <textarea name="message" required />
      <button>Submit</button>
    </Form>
  );
};
export const contactAction = async ({ request }: any) => {
  const data = await request.formData();
  //   const submission = {
  //     email: data.get("email"),
  //     message: data.get("message"),
  //   };
  console.log(data);
  return redirect("/");
};

export default MyForm;
