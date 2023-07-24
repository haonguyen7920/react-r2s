import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Go to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
};

export default ErrorPage;
