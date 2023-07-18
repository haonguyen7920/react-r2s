// import React, { useState } from "react";
// import styles from "./style.module.css";
// import { Link, Outlet } from "react-router-dom";
// const dataT = [
//   {
//     name: "hamburger",
//     description: "mon ngon",
//   },
//   {
//     name: "banh my",
//     description: "my ngon",
//   },
// ];
// interface Recipe {
//   name: string;
//   description: string;
// }
// function Recipes() {
//   const [recipes] = useState(dataT);
//   return (
//     <div className={styles.container}>
//       <div className={styles.leftSide}>
//         <Link to="form" className="btn btn-success mb-3">
//           New Recipe
//         </Link>
//         <div id="content">
//           {recipes.map((r)=>{

//           })}
//         </div>
//       </div>
//       <div className={styles.rightSide}>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Recipes;
