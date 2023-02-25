import React from "react";

import classes from "./BackBtn.module.css";

import { FaAngleLeft } from "react-icons/fa";

const BackBtn = () => {
  return (
    <button className={classes.backBtn} onClick={() => localStorage.clear()}>
      <FaAngleLeft style={{ fontSize: "30px" }} />
    </button>
  );
};

export default BackBtn;
