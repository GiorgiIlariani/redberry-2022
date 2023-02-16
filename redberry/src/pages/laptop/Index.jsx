import React, { useEffect } from "react";

// import classes
import classes from "./styles.module.css";

//router link
import { Link } from "react-router-dom";

// backBtn
import BackBtn from "../../components/UI/backBtn/BackBtn";

// header
import Header from "../../components/header/Header";

const LaptopOptions = () => {
  //  change background color
  useEffect(() => {
    document.body.style.backgroundColor = "#F6F6F6";
  }, []);

  return (
    <>
      <Link to="/">
        <BackBtn />
      </Link>
      <Header />
      
    </>
  );
};

export default LaptopOptions;
