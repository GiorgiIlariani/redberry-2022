import React from "react";

import classes from "./BackBtn.module.css";

const BackBtn = () => {
  return (
    <div className={classes.backBtn}>
      <img src="./assets/images/backLogo.png" alt="go back" />
    </div>
  );
};

export default BackBtn;
