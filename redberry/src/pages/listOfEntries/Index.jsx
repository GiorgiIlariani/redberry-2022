import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackBtn from "../../components/UI/backBtn/BackBtn";

/// import classes
import classes from "./styles.module.css";

const ListOfEntries = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [laptopArr, setLaptopArr] = useState([]);

  const name = localStorage.getItem("name");
  const surname = localStorage.getItem("surname");
  const team = localStorage.getItem("team");
  const mail = localStorage.getItem("mail");
  const phoneNumber = localStorage.getItem("phoneNumber");
  const laptopImage = localStorage.getItem("computerImage");
  const laptopName = localStorage.getItem("laptopName");
  const laptopBrand = localStorage.getItem("eachBrandsValue");
  const laptopRam = localStorage.getItem("laptopRam");
  const laptopMemoryType = localStorage.getItem("memoryType");
  const laptopCpu = localStorage.getItem("eachCpuValue");
  const laptopCpuCore = localStorage.getItem("cpuCore");
  const laptopCpuFrequency = localStorage.getItem("cpuFrequency");

  const laptopInfo = {
    name,
    surname,
    team,
    mail,
    phoneNumber,
    laptopImage,
    laptopBrand,
    laptopCpu,
    laptopCpuCore,
    laptopCpuFrequency,
    laptopRam,
    laptopMemoryType,
    laptopName,
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
  }, []);

  // const postEntryLaptopInfo = async () => {
  //   const response = await fetch(
  //     "https://redberry-2022-default-rtdb.firebaseio.com/laptopInfo.json", {
  //       method: 'POST',
  //       body: JSON.stringify()
  //     });
  // }

  console.log(laptopArr);

  return (
    <>
      <Link to="/">
        <BackBtn />
      </Link>
      <h2 className={classes["main-title"]}>ჩანაწერების სია</h2>
    </>
  );
};

export default ListOfEntries;
