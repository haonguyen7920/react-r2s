import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./style.module.css";
interface Recipe {
  name: string;
  description: string;
}
function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    { name: "banhHamburgerHao", description: "sdfds" },
  ]);

  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      const { name, description } = state;
      const newRecipes = { name, description };
      setRecipes([...recipes, newRecipes]);
      // const newA = [...recipes];
      // newA.push(newRecipes);
      // setRecipes(newA);
    }
  }, []);

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
