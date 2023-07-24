import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
}
const MyRecipe = () => {
  const { recipeID } = useParams();
  const { recipes } = useSelector((state: any) => state.recipesReducer);
  const detail: Recipe = recipes.find(
    (recipe: Recipe) => recipe.id.toString() === recipeID
  );
  console.log(detail);

  return (
    <div>
      <img src={detail.image} alt="" height={200} />
      <p className="fw-bold">{detail.name}</p>
      <div className="dropdown">
        <button
          className="btn btn-info dropdown-toggle"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Manage Recipe
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <Link className="dropdown-item" to="/shopping-list">
            To Shopping List
          </Link>
          <a className="dropdown-item" href="/#">
            Edit Recipe
          </a>
          <a className="dropdown-item" href="/#">
            Delete Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
