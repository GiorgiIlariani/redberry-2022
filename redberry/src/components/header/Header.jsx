import React, { useEffect } from "react";

// router NavLink
import { NavLink } from "react-router-dom";

// import classes
import classes from "./Header.module.css";

const Header = ({
  formIsValid,
  employerPage,
  setEmployerPage,
  laptopPage,
  setLaptopPage,
}) => {
  useEffect(() => {
    if (employerPage !== undefined) {
      setEmployerPage(true);
    }
  }, []);

  useEffect(() => {
    if (laptopPage !== undefined) {
      setLaptopPage(true);
    }
  }, []);

  let activeStyle = {
    color: "#0000ff",
  };

  return (
    <>
      <div className={classes.header}>
        <NavLink
          to="/employer"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h4 className={classes.employerResponsive}>თანამშრომლის ინფო</h4>
        </NavLink>
        <NavLink
          to="/laptop-options"
          state={{ formIsValid }}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          <h4 className={classes.laptopResponsive}>ლეპტოპის მახასიათებლები</h4>
        </NavLink>
      </div>
      {employerPage && laptopPage === undefined && (
        <p className={classes.page}>1/2</p>
      )}
      {laptopPage && employerPage === undefined && (
        <p className={classes.page}>2/2</p>
      )}
    </>
  );
};

export default Header;
