import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./screens/Root";
import ErrorPage from "./screens/ErrorPage";
import Recipes from "./screens/Recipes";
import ShoppingList from "./screens/ShoppingList";
import Form from "./components/Form";
import store from "./store";
import { Provider } from "react-redux";
import Recipe from "./screens/Recipes/Recipe";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <h4>Home Page</h4>,
      },
      {
        path: "recipes",
        element: <Recipes />,
        children: [
          {
            index: true,
            element: <h5>Please select a Recipe!</h5>,
          },
          {
            path: "form",
            element: <Form />,
          },
          {
            path: ":recipeID",
            element: <Recipe />,
          },
        ],
      },
      {
        path: "shopping-list",
        element: <ShoppingList />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
