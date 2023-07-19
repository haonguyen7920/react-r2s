import React, { useState } from "react";
import { Link, Outlet, useFormAction } from "react-router-dom";
import styles from "./style.module.css";

// const dataRecipes = [
//   {
//     name: "hamburger",
//     description: "banh1",
//   },
// ];
interface Recipe {
  name: string;
  description: string;
}
function Recipes() {
  const [recipes] = useState<Recipe[]>([]);
  const kk = useFormAction();
  console.log(kk);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link to="form" className="btn btn-success mb-3">
          New Recipe
        </Link>
        <section>
          {recipes.map((recipe, index) => (
            <p key={index}>{recipe.name}</p>
          ))}
        </section>
      </div>
      <div className={styles.rightSide}>
        <Outlet />
      </div>
    </div>
  );
}

export default Recipes;
