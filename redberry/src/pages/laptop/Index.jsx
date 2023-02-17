import React, { useEffect } from "react";

// costum hook
import useInput from "../../hooks/useInput";

// import classes
import classes from "./styles.module.css";

//router link
import { Link } from "react-router-dom";

// backBtn
import BackBtn from "../../components/UI/backBtn/BackBtn";

// mui button
import MuiButton from "../../components/UI/muiButton/MuiButton";

// header
import Header from "../../components/header/Header";

// import brands
import LaptopBrands from "../../components/UI/laptopBrands/LaptopBrands";
import Cpu from "../../components/UI/cpu/Cpu";
import Radios from "../../components/UI/radios/Radios";
import { Button } from "@mui/material";

const patterns = {
  leptopName: /^[a-zA-Z0-9!@#$%^&*()_+=]{1,}$/,
  onlyNumbers: /^[0-9]{1,}$/,
};

const LaptopOptions = () => {
  // laptop name
  const {
    value: enteredLaptopNameValue,
    isValid: enteredLaptopNameIsValid, // is form valid?
    valueChangeHandler: laptopNameInputChangedHandler,
    inputBlurHandler: laptopNameInputBlurHandler,
    inputClasses: laptopNameInputClasses,
    onSubmit: enteredLaptopNameSubmited,
  } = useInput((value) => patterns.leptopName.test(value), "laptopName");

  // cpu core
  const {
    value: enteredCpuCoreValue,
    isValid: enteredCpuCoreIsValid, // is form valid?
    valueChangeHandler: cpuCoreInputChangedHandler,
    inputBlurHandler: cpuCoreInputBlurHandler,
    inputClasses: cpuCoreInputClasses,
    onSubmit: enteredCpuCoreSubmited,
  } = useInput((value) => patterns.onlyNumbers.test(value), "cpuCore");

  // cpu frequency
  const {
    value: enteredCpuFrequencyValue,
    isValid: enteredCpuFrequencyIsValid, // is form valid?
    valueChangeHandler: cpuFrequencyInputChangedHandler,
    inputBlurHandler: cpuFrequencyInputBlurHandler,
    inputClasses: cpuFrequencyInputClasses,
    onSubmit: enteredCpuFrequencySubmited,
  } = useInput((value) => patterns.onlyNumbers.test(value), "cpuFrequency");

  // laptop ram
  const {
    value: enteredLeptopRamValue,
    isValid: enteredLeptopRamIsValid, // is form valid?
    valueChangeHandler: leptopRamInputChangedHandler,
    inputBlurHandler: leptopRamInputBlurHandler,
    inputClasses: leptopRamInputClasses,
    onSubmit: enteredLeptopRamSubmited,
  } = useInput((value) => patterns.onlyNumbers.test(value), "laptopRam");

  // localstorage
  useEffect(() => {
    localStorage.setItem("laptopName", enteredLaptopNameValue);
    localStorage.setItem("cpuCore", enteredCpuCoreValue);
    localStorage.setItem("cpuFrequency", enteredCpuFrequencyValue);
    localStorage.setItem("laptopRam", enteredLeptopRamValue);
  }, [
    enteredLaptopNameValue,
    enteredCpuCoreValue,
    enteredCpuFrequencyValue,
    enteredLeptopRamValue,
  ]);

  //  change background color
  useEffect(() => {
    document.body.style.backgroundColor = "#F6F6F6";
  }, []);

  // submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    // submited
    enteredLaptopNameSubmited(true);
    enteredCpuCoreSubmited(true);
    enteredCpuFrequencySubmited(true);
    enteredLeptopRamSubmited(true);
  };

  return (
    <>
      <Link to="/">
        <BackBtn />
      </Link>
      <Header />
      <section className="section-container">
        <form>
          <div className={classes["upload-computer-photo"]}>
            <div>
              <h4>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</h4>
              <label htmlFor="computer-photo">
                <input type="file" id="computer-photo" name="computer-photo" />
                ატვირთე
              </label>
            </div>
          </div>
          <div className="flex-container" id={classes["laptopName-brands"]}>
            <div className={laptopNameInputClasses}>
              <label htmlFor="laptopName">ლეპტოპის სახელი</label>
              <input
                type="text"
                name="laptopName"
                value={enteredLaptopNameValue}
                onChange={laptopNameInputChangedHandler}
                onBlur={laptopNameInputBlurHandler}
                placeholder="HP"
              />
              <p>ლათინური ასოები, ციფრები, !@#$%^&*_+=</p>
            </div>
            <LaptopBrands />
          </div>
          <div className={classes.border}></div>
          <div className={classes["grid-container"]}>
            <Cpu />
            <div className={cpuCoreInputClasses}>
              <label htmlFor="cpu-core">CPU-ს ბირთვი</label>
              <input
                type="text"
                name="cpu-core"
                value={enteredCpuCoreValue}
                onChange={cpuCoreInputChangedHandler}
                onBlur={cpuCoreInputBlurHandler}
                placeholder="14"
              />
              <p>მხოლოდ ციფრები</p>
            </div>
            <div className={cpuFrequencyInputClasses}>
              <label htmlFor="cpuFrequency">CPU-ს ნაკადი</label>
              <input
                type="text"
                name="cpuFrequency"
                value={enteredCpuFrequencyValue}
                onChange={cpuFrequencyInputChangedHandler}
                onBlur={cpuFrequencyInputBlurHandler}
                placeholder="365"
              />
              <p>მხოლოდ ციფრები</p>
            </div>
          </div>
          <div className="flex-container" id={classes.ram}>
            <div className={leptopRamInputClasses}>
              <label htmlFor="RAM">ლეპტოპის RAM(GB)</label>
              <input
                type="text"
                name="RAM"
                value={enteredLeptopRamValue}
                onChange={leptopRamInputChangedHandler}
                onBlur={leptopRamInputBlurHandler}
                placeholder="16"
              />
              <p>მხოლოდ ციფრები</p>
            </div>
            <div>
              <h4>მეხსიერების ტიპი</h4>
              <Radios firstValue=" SSD" secondValue="HHD" />
            </div>
          </div>
          <div className={classes.border}></div>
          <div className="flex-container" style={{ alignItems: "normal" }}>
            <div className="input-div">
              <label htmlFor="date">შეძენის რიცხვი(არჩევითი)</label>
              <input type="date" />
            </div>
            <div className="input-div" id={classes.price}>
              <label htmlFor="laptop-price">ლეპტოპის ფასი</label>
              <input type="text" name="laptop-price" placeholder="0000" />
              <p>მხოლოდ ციფრები</p>
            </div>
          </div>
          <div className={classes["laptop-condition"]}>
            <h4>ლეპტოპის მდგომარეობა</h4>
            <Radios firstValue="ახალი" secondValue="მეორადი" />
          </div>
          <div className="flex-container">
            <Link to="/employer">
              <Button variant="text" sx={{ mt: "95px" }} size="large">
                უკან
              </Button>
            </Link>
            <MuiButton
              text="დამახსოვრება"
              submitHandler={submitHandler}
              width="176px"
            />
          </div>
        </form>
      </section>
      <div className={classes["footer-img-container"]}>
        <img src="./assets/images/employer-footer-logo.png" alt="footer-logo" />
      </div>
    </>
  );
};

export default LaptopOptions;
