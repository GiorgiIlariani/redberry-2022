import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../../components/UI/backBtn/BackBtn";

// mui loading
import CircularProgress from "@mui/material/CircularProgress";

/// import classes
import classes from "./styles.module.css";
import { Box } from "@mui/material";

const ListOfEntries = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
  }, []);

  useEffect(() => {
    const fetchLaptopInfo = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://redberry-2022-default-rtdb.firebaseio.com/laptopInfo.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const laptopInfo = [];

      for (const key in data) {
        laptopInfo.push({
          id: key,
          name: data[key].name,
          surname: data[key].surname,
          image: data[key].laptopImage,
          laptopName: data[key].laptopName,
        });
      }

      setInfo(laptopInfo);
      setIsLoading(false);
    };
    fetchLaptopInfo().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const eachLaptop = info.map((item) => {
    return (
      <div key={item.id} className={classes["each-laptop"]}>
        <img
          src={item.image}
          alt="laptop"
          className={classes["laptop-image"]}
        />
        <div>
          <h4>
            {item.name} {item.surname}
          </h4>
          <h5>{item.laptopName}</h5>
          <Link to={`/laptop/${item.id}`}>მეტის ნახვა</Link>
        </div>
      </div>
    );
  });

  if (error) {
    return <p className={classes.error}>{error}</p>;
  }

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", mt: 20 }}>
        <CircularProgress size="10vh" />
      </Box>
    );
  }

  return (
    <div className={classes.layout}>
      <Link to="/">
        <BackBtn />
      </Link>
      <h2 className={classes["main-title"]}>ჩანაწერების სია</h2>
      <section className={classes.entryList}>
        {!isLoading && eachLaptop}
      </section>
    </div>
  );
};

export default ListOfEntries;
