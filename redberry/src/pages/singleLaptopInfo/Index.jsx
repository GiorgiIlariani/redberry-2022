import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import css
import classes from "./styles.module.css";

const SingleLeptopInfo = () => {
  const [singleLaptopData, setSingleLaptopData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleLaptopInfo = async () => {
      const response = await fetch(
        `https://redberry-2022-default-rtdb.firebaseio.com/laptopInfo/${id}.json`
      );
      const data = await response.json();
      setSingleLaptopData(data);
    };
    fetchSingleLaptopInfo();
  }, []);

  console.log(singleLaptopData);

  return <div>LaptopInfo</div>;
};

export default SingleLeptopInfo;
