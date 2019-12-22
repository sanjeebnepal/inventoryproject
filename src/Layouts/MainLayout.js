import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <>
      <Header />

      <main>{props.children}</main>
    </>
  );
};

const Header = props => {
  return (
    <header className="hcontainer">
      <div className="left">
        <Link to="/">
          <h2>INVENTORY</h2>
        </Link>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
// return (
//   <header>
//     <Link to="/">
//       <h2>Inventory</h2>
//     </Link>
//     <div>
//       <ul>{<li></li>} </ul>
//     </div>
//   </header>
// );
