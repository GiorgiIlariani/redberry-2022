import { Button, ButtonGroup } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import classes
import classes from "./Popup.module.css";

const Popup = () => {
  //  change background color
  useEffect(() => {
    document.body.style.backgroundColor = "#F6F6F6";
  }, []);

  return (
    <div className={classes.popup}>
      <div className={classes["popup-content"]}>
        <img src="./assets/images/popup-logo.png" alt="popup logo" />
        <h2>ჩანაწერი დამატებულია !</h2>
        <ButtonGroup orientation="vertical" sx={{ alignItems: "center" }}>
          <Link to="/listOfEntries">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#62A1EB",
                height: "60px",
                fontSize: "18px",
                width: "300px",
                m: "80px 0 30px 0",
                borderRadius: "8px",
              }}
              disableElevation>
              სიაში გადაყვანა
            </Button>
          </Link>
          <Link to="/">
            <Button
              variant="text"
              size="large"
              sx={{ fontSize: "20px", width: "300px" }}>
              მთავარი
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Popup;
