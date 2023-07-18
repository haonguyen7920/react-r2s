import React, { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import styles from "./style.module.css";

const dataRecipes = [
  {
    id: 1,
    title: "banh1",
    isCompleted: false,
  },
];
interface Recipe {
  id: number;
  title: string;
  isCompleted: boolean;
}
function Recipes() {
  const [recipes] = useState<Recipe[]>(dataRecipes);
  const prop = useLoaderData();
  console.log(prop);

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link to="form" className="btn btn-success mb-3">
          New Recipe
        </Link>
        <section>
          {recipes.map((recipe) => (
            <p key={recipe.id}>{recipe.title}</p>
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
