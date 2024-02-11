import React from "react";

import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div
      style={{
        // flexDirection: "column",
        width: "90%",
        marginTop: "7px",
      }}
    >
      <ul
        className={classes.navlist}
        style={{
          display: "flex",
          // flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <li className="border-2 hover:border-b-purple-500">Home</li>
        <li className="border-2 hover:border-b-purple-500">About</li>
        <li className="border-2 hover:border-b-purple-500">Services</li>
        <li className="border-2 hover:border-b-purple-500">Portfolio</li>
        <li className="border-2 hover:border-b-purple-500">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
