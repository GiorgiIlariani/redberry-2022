import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BackBtn from "../../components/UI/backBtn/BackBtn";

// import css
import classes from "./styles.module.css";

const SingleLaptopInfo = () => {
  const [singleLaptopData, setSingleLaptopData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
  }, []);

  useEffect(() => {
    const fetchSingleLaptopInfo = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://redberry-2022-default-rtdb.firebaseio.com/laptopInfo/${id}.json`
      );
      const data = await response.json();
      setSingleLaptopData([data]);
      setIsLoading(false);
    };
    fetchSingleLaptopInfo();
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", mt: 20 }}>
        <CircularProgress size="10vh" />
      </Box>
    );
  }

  return (
    <>
      <Link to="/listOfEntries">
        <BackBtn />
      </Link>
      <h2 className={classes["main-title"]}>ლეპტოპის ინფო</h2>
      <section className={classes.singleLaptop}>
        {singleLaptopData.map((data) => {
          return (
            <div key={data.id}>
              <div className={classes["top-content"]}>
                <img src={data.laptopImage} alt="laptop" />
                <div className={classes["right-side"]}>
                  <ul className={classes["results-label"]}>
                    <li>სახელი:</li>
                    <li>თიმი:</li>
                    <li>პოზიცია:</li>
                    <li>მეილი:</li>
                    <li>ტელ.ნომერი: </li>
                  </ul>
                  <ul className={classes.results}>
                    <li>
                      {data.name} {data.surname}
                    </li>
                    <li>{data.team}</li>
                    <li>{data.position}</li>
                    <li>{data.mail}</li>
                    <li>{data.phoneNumber}</li>
                  </ul>
                </div>
              </div>
              <div className={classes.border}></div>
              <div className={classes["middle-content"]}>
                <div className={classes["left-side"]}>
                  <ul className={classes["results-label"]}>
                    <li>ლეპტოპის სახელი:</li>
                    <li>ლეპტოპის ბრენდი:</li>
                    <li>RAM:</li>
                    <li>მეხსიერების ტიპი:</li>
                  </ul>
                  <ul className={classes.results}>
                    <li>{data.laptopName}</li>
                    <li>{data.laptopBrand}</li>
                    <li>{data.laptopRam}</li>
                    <li>{data.laptopMemoryType}</li>
                  </ul>
                </div>
                <div className={classes["right-side"]}>
                  <ul className={classes["results-label"]}>
                    <li>CPU:</li>
                    <li>CPU-ს ბირთვი: </li>
                    <li>CPU-ს ნაკადი:</li>
                  </ul>
                  <ul className={classes.results}>
                    <li>{data.laptopCpu}</li>
                    <li>{data.laptopCpuCore}</li>
                    <li>{data.laptopCpuFrequency}</li>
                  </ul>
                </div>
              </div>
              <div className={classes.border}></div>
              <div className={classes["bottom-content"]}>
                <div className={classes["left-side"]}>
                  <ul className={classes["results-label"]}>
                    <li>ლეპტოპის მდგომარეობა: </li>
                    <li>ლეპტოპის ფასი: </li>
                  </ul>
                  <ul className={classes.results}>
                    <li>{data.laptopCondition}</li>
                    <li>{data.laptopPrice}</li>
                  </ul>
                </div>
                <div className={classes["right-side"]}>
                  <ul className={classes["results-label"]}>
                    <li>შეძენის რიცხვი: </li>
                  </ul>
                  <ul className={classes.results}>
                    <li>{data.purchaseDate}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default SingleLaptopInfo;
