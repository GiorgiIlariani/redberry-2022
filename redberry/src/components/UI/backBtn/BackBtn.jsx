import React from "react";

import classes from "./BackBtn.module.css";

const BackBtn = () => {
  return (
    <button className={classes.backBtn} onClick={() => localStorage.clear()}>
      <img src="./assets/images/backLogo.png" alt="go back" />
    </button>
  );
};

export default BackBtn;
