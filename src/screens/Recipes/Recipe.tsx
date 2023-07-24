import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteRecipe } from "../../store/actions";

interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
}
const MyRecipe = () => {
  const navigate = useNavigate();
  const { recipeID } = useParams();
  const { recipes } = useSelector((state: any) => state.recipesReducer);
  const dispatch = useDispatch();
  const detail: Recipe = recipes.find(
    (recipe: Recipe) => recipe.id.toString() === recipeID
  );
  const { id, image, name, description } = detail;
  const handleDelete = () => {
    dispatch(deleteRecipe(detail.id));
    navigate("/recipes");
  };
  const handleEdit = () => {
    navigate("/recipes/form", { state: { id, image, name, description } });
  };
  return (
    <div>
      <img src={image} alt="" height={200} />
      <p className="fw-bold">{name}</p>
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
          <button className="dropdown-item" onClick={handleEdit}>
            Edit Recipe
          </button>
          <button className="dropdown-item" onClick={handleDelete}>
            Delete Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
