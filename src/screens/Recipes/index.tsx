import React, { useState } from "react";
import styles from "./style.module.css";
import { Link, Outlet } from "react-router-dom";

interface Props {
  name: string;
  description: string;
}
const Recipes = () => {
  const [recipes] = useState<Props[]>([
    {
      name: "hamburger",
      description: "mon ngon",
    },
    {
      name: "banh my",
      description: "my ngon",
    },
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link to="form" className="btn btn-success mb-3">
          New Recipe
        </Link>
      </div>
      <div className={styles.rightSide}>
        <Outlet />
      </div>
    </div>
  );
};

export default Recipes;
