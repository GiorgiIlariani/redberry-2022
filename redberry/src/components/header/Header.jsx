import React from "react";

// router NavLink
import { NavLink } from "react-router-dom";

// import classes
import classes from "./Header.module.css";

const Header = ({ formIsValid }) => {
  let activeStyle = {
    color: "#0000ff",
  };

  return (
    <div className={classes.header}>
      <NavLink
        to="/employer"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <h4>თანამშრომლის ინფო</h4>
      </NavLink>
      <NavLink
        to="/laptop-options"
        state={{ formIsValid }}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <h4>ლეპტოპის მახასიათებლები</h4>
      </NavLink>
    </div>
  );
};

export default Header;
