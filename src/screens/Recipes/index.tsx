import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import styles from "./style.module.css";
interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
}
function Recipes() {
  const { recipes } = useSelector((state: any) => state.recipesReducer);
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link to="form" className="btn btn-success mb-3">
          New Recipe
        </Link>
        <div>
          {recipes.map((recipe: Recipe) => (
            <Link
              to={recipe.id.toString()}
              key={recipe.id}
              className={styles.item}
            >
              <div>
                <p className="mb-0 fw-bold">{recipe.name}</p>
                <p>{recipe.description}</p>
              </div>
              <img src={recipe.image} alt="" width={50} height={50} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <Outlet />
      </div>
    </div>
  );
}

export default Recipes;
