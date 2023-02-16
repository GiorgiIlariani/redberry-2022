import React, { useEffect } from "react";

//router link
import { Link } from "react-router-dom";

// mui button
import Button from "@mui/material/Button";

// module css
import classes from "./styles.module.css";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
  }, []);

  return (
    <div className={classes.home}>
      <img
        src="./assets/images/redberry.png"
        alt="redberry"
        className={classes.redberry}
      />
      <img
        src="./assets/images/desktopGroupLogo.png"
        alt="desktop logo"
        className={classes["group-logo"]}
      />
      <img
        src="./assets/images/mobileGroupLogo.png"
        alt="mobile logo"
        className={classes["mobile-logo"]}
      />
      <Link to="/employer">
        <Button
          className={classes.btn}
          variant="contained"
          sx={{
            mt: "123px",
            fontSize: "20px",
          }}
          disableElevation>
          ჩანაწერის დამატება
        </Button>
      </Link>
      <Button
        className={classes.btn}
        variant="contained"
        sx={{
          mt: "26px",
          fontSize: "20px",
        }}
        disableElevation>
        ჩანაწერების სია
      </Button>
    </div>
  );
};

export default Home;
