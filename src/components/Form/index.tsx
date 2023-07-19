import React from "react";
// import { useNavigate } from "react-router-dom";

const MyForm = () => {
  // const navigate = useNavigate();
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   navigate("/");
  // };
  return (
    <form method="post" action="/recipes/form">
      <button className="btn btn-success" type="submit">
        Save
      </button>
      <input type="email" name="email" required />
      <textarea name="message" required />
    </form>
  );
};
// export const recipeAction = async ({ request }: any) => {
//   const formData = await request.formData();
//   const submission = {
//     email: formData.get("email"),
//     message: formData.get("message"),
//   };
//   return { submission };
// };

export default MyForm;
