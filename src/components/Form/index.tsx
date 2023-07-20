import React from "react";
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/recipes", {
      state: { name: "banh Hamburger", description: "green" },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <button className="btn btn-success" type="submit">
        Save
      </button>
      <input type="email" name="email" required />
      <textarea name="message" required />
    </form>
  );
};

export default MyForm;
