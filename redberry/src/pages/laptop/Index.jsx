import React, { useEffect, useState } from "react";

// costum hook
import useInput from "../../hooks/useInput";

// import classes
import classes from "./styles.module.css";

//router link
import { Link, useNavigate, useLocation } from "react-router-dom";

// backBtn
import BackBtn from "../../components/UI/backBtn/BackBtn";

// mui button
import MuiButton from "../../components/UI/muiButton/MuiButton";

// header
import Header from "../../components/header/Header";

// import brands
import LaptopBrands from "../../components/UI/laptopBrands/LaptopBrands";
import Cpu from "../../components/UI/cpu/Cpu";
import MemoryTypeRadio from "../../components/UI/radios/MemoryTypeRadio";
import { Button } from "@mui/material";
import LaptopConditionRadios from "../../components/UI/radios/LaptopConditionRadios";

const patterns = {
  leptopName: /^[a-zA-Z0-9!@#$%^&*()_+=]{1,}$/,
  onlyNumbers: /^[0-9]{1,}$/,
};

const LaptopOptions = (props) => {
  //  change background color
  useEffect(() => {
    document.body.style.backgroundColor = "#F6F6F6";
  }, []);

  const [image, setImage] = useState(
    localStorage.getItem("computerImage") || null
  );
  const [isImageTouched, setIsImageTouched] = useState(false);

  if (image === "null") {
    setImage(null);
  }

  let isImageValid = image !== null;

  // brand touched
  const [isBrandsTouched, setIsBrandsTouched] = useState(false);

  // cpu touched
  const [isCpuTouched, setIsCpuTouched] = useState(false);

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
    value: enteredLaptopRamValue,
    isValid: enteredLaptopRamIsValid, // is form valid?
    valueChangeHandler: laptopRamInputChangedHandler,
    inputBlurHandler: laptopRamInputBlurHandler,
    inputClasses: laptopRamInputClasses,
    onSubmit: enteredLaptopRamSubmited,
  } = useInput((value) => patterns.onlyNumbers.test(value), "laptopRam");

  // price of the laptop
  const {
    value: enteredLaptopPriceValue,
    isValid: enteredLaptopPriceIsValid, // is form valid?
    valueChangeHandler: laptopPriceInputChangedHandler,
    inputBlurHandler: laptopPriceInputBlurHandler,
    inputClasses: laptopPriceInputClasses,
    onSubmit: enteredLaptopPriceSubmited,
  } = useInput((value) => patterns.onlyNumbers.test(value), "laptopPrice");

  // Date of purchase
  const [enteredPurchaseDate, setEnteredPurchaseDate] = useState(
    localStorage.getItem("purchaseDate") || ""
  );
  const [isPurchaseDateTouched, setIsPurchaseDateTouched] = useState(false);

  const purchaseInputClasses =
    enteredPurchaseDate === "" && isPurchaseDateTouched
      ? "danger-border"
      : enteredPurchaseDate !== ""
      ? "success-border"
      : null;

  const [enteredMemoryType, setEnteredMemoryType] = useState(
    localStorage.getItem("memoryType") || ""
  );
  const [enteredMemoryTypeTouched, setEnteredMemoryTypeTouched] =
    useState(false);

  const [enteredLaptopCondition, setEnteredLaptopCondition] = useState(
    localStorage.getItem("laptopCondition") || ""
  );
  const [enteredLaptopConditionTouched, setEnteredLaptopConditionTouched] =
    useState(false);

  // seletcs
  const [eachCpuValue, setEachCpuValue] = useState(
    localStorage.getItem("eachCpuValue") || ""
  );
  const [eachBrandsValue, setEachBrandsValue] = useState(
    localStorage.getItem("eachBrandsValue") || ""
  );

  // navigate
  const navigate = useNavigate();

  // localstorage
  useEffect(() => {
    localStorage.setItem("laptopName", enteredLaptopNameValue);
    localStorage.setItem("cpuCore", enteredCpuCoreValue);
    localStorage.setItem("cpuFrequency", enteredCpuFrequencyValue);
    localStorage.setItem("laptopRam", enteredLaptopRamValue);
    localStorage.setItem("laptopPrice", enteredLaptopPriceValue);
    localStorage.setItem("purchaseDate", enteredPurchaseDate);
    localStorage.setItem("memoryType", enteredMemoryType);
    localStorage.setItem("laptopCondition", enteredLaptopCondition);
    localStorage.setItem("computerImage", image);
    localStorage.setItem("eachCpuValue", eachCpuValue);
    localStorage.setItem("eachBrandsValue", eachBrandsValue);
  }, [
    enteredPurchaseDate,
    enteredLaptopNameValue,
    enteredCpuCoreValue,
    enteredCpuFrequencyValue,
    enteredLaptopRamValue,
    enteredLaptopPriceValue,
    enteredMemoryType,
    enteredLaptopCondition,
    image,
    eachCpuValue,
    eachBrandsValue,
  ]);

  const location = useLocation();
  let isEmployeeFormValid = location.state.formIsValid;

  // submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    // submited
    setIsImageTouched(true);
    enteredLaptopNameSubmited(true);
    enteredCpuCoreSubmited(true);
    enteredCpuFrequencySubmited(true);
    enteredLaptopRamSubmited(true);
    enteredLaptopPriceSubmited(true);
    setIsBrandsTouched(true);
    setIsCpuTouched(true);
    setIsPurchaseDateTouched(true);
    setEnteredLaptopConditionTouched(true);
    setEnteredMemoryTypeTouched(true);

    //
    if (isFormValid && isEmployeeFormValid) {
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
      const laptopCondition = localStorage.getItem("laptopCondition");
      const purchaseDate = localStorage.getItem("purchaseDate");
      const laptopPrice = localStorage.getItem("laptopPrice");

      const laptopInfo = {
        id: Math.random(),
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
        laptopCondition,
        purchaseDate,
        laptopPrice,
      };

      fetch(
        "https://redberry-2022-default-rtdb.firebaseio.com/laptopInfo.json",
        {
          method: "POST",
          body: JSON.stringify(laptopInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/popup");
    }

    if (isFormValid && !isEmployeeFormValid) {
      alert("make sure u fill everything on employee page");
    }
  };

  // image change
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // is form valid ?
  let isFormValid = false;

  if (
    enteredLaptopNameIsValid &&
    enteredCpuCoreIsValid &&
    enteredCpuFrequencyIsValid &&
    enteredLaptopRamIsValid &&
    enteredLaptopPriceIsValid &&
    enteredPurchaseDate !== "" &&
    image !== null &&
    eachBrandsValue !== "" &&
    eachCpuValue !== "" &&
    enteredLaptopCondition !== "" &&
    enteredMemoryType !== ""
  ) {
    isFormValid = true;
  }

  return (
    <>
      <Link to="/">
        <BackBtn />
      </Link>
      <Header />
      <section className="section-container">
        <form>
          <div className={classes["about-computer-photo"]}>
            {image === null ? (
              <div
                className={classes["upload-computer-photo"]}
                id={
                  image === null && isImageTouched
                    ? classes["not-valid"]
                    : image === null
                    ? classes["valid"]
                    : null
                }>
                {image === null && isImageTouched ? (
                  <img
                    src="./assets/images/danger.png"
                    className={classes.danger}
                    alt="danger"
                  />
                ) : null}
                <h4
                  className={
                    image === null && isImageTouched ? "error-text" : null
                  }>
                  ჩააგდე ან ატვირთე ლეპტოპის ფოტო
                </h4>
                <label htmlFor="computer-photo">
                  <input
                    type="file"
                    id="computer-photo"
                    name="computer-photo"
                    onChange={onImageChange}
                  />
                  ატვირთე
                </label>
              </div>
            ) : (
              <img
                src={image}
                alt="uploaded-img"
                className={classes["uploaded-image"]}
              />
            )}

            {image !== null && (
              <div className={classes["upload-again"]}>
                <div className={classes.successMsg}>
                  <img src="./assets/images/success.png" alt="success" />
                  <h3>სურათი წარმატებით აიტვირთა</h3>
                </div>
                <label htmlFor="computer-photo">
                  <input
                    type="file"
                    id="computer-photo"
                    name="computer-photo"
                    onChange={onImageChange}
                  />
                  ხელახლა ატვირთე
                </label>
              </div>
            )}
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
              <p>ლათინური ასოები, ციფრები, სიმბოლოები</p>
            </div>
            <LaptopBrands
              isBrandsTouched={isBrandsTouched}
              eachBrandsValue={eachBrandsValue}
              setEachBrandsValue={setEachBrandsValue}
            />
          </div>
          <div className={classes.border}></div>
          <div className={classes["grid-container"]}>
            <Cpu
              isCpuTouched={isCpuTouched}
              eachCpuValue={eachCpuValue}
              setEachCpuValue={setEachCpuValue}
            />
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
            <div className={laptopRamInputClasses}>
              <label htmlFor="RAM">ლეპტოპის RAM(GB)</label>
              <input
                type="text"
                name="RAM"
                value={enteredLaptopRamValue}
                onChange={laptopRamInputChangedHandler}
                onBlur={laptopRamInputBlurHandler}
                placeholder="16"
              />
              <p>მხოლოდ ციფრები</p>
            </div>
            <div>
              <div className={classes["danger-radios"]}>
                {enteredMemoryType === "" && enteredMemoryTypeTouched ? (
                  <>
                    <h4 className="error-text">მეხსიერების ტიპი</h4>
                    <img src="./assets/images/danger.png" alt="danger" />
                  </>
                ) : (
                  <h4>მეხსიერების ტიპი</h4>
                )}
              </div>
              <MemoryTypeRadio
                enteredMemoryType={enteredMemoryType}
                setEnteredMemoryType={setEnteredMemoryType}
              />
            </div>
          </div>
          <div className={classes.border}></div>
          <div className="flex-container" style={{ alignItems: "normal" }}>
            <div className="input-div">
              <label htmlFor="date">შეძენის რიცხვი(არჩევითი)</label>
              <input
                type="date"
                name="date"
                className={purchaseInputClasses}
                value={enteredPurchaseDate}
                onChange={(e) => setEnteredPurchaseDate(e.target.value)}
              />
            </div>
            <div className={laptopPriceInputClasses} id={classes.price}>
              <label htmlFor="laptop-price">ლეპტოპის ფასი</label>
              <input
                type="text"
                name="laptop-price"
                value={enteredLaptopPriceValue}
                onChange={laptopPriceInputChangedHandler}
                onBlur={laptopPriceInputBlurHandler}
                placeholder="0000"
              />
              <p>მხოლოდ ციფრები</p>
            </div>
          </div>
          <div className={classes["laptop-condition"]}>
            <div className={classes["danger-radios"]}>
              {enteredLaptopCondition === "" &&
              enteredLaptopConditionTouched ? (
                <>
                  <h4 className="error-text">ლეპტოპის მდგომარეობა</h4>
                  <img src="./assets/images/danger.png" alt="danger" />
                </>
              ) : (
                <h4>ლეპტოპის მდგომარეობა</h4>
              )}
            </div>
            <LaptopConditionRadios
              enteredLaptopCondition={enteredLaptopCondition}
              setEnteredLaptopCondition={setEnteredLaptopCondition}
            />
          </div>
          <div className="flex-container">
            <Link to="/employer">
              <Button variant="text" sx={{ mt: "95px" }} size="large">
                უკან
              </Button>
            </Link>
            {/* conditional rendering if form is valid show popup */}
            <Button
              type="submit"
              onClick={submitHandler}
              variant="contained"
              size="large"
              sx={{
                position: "relative",
                right: 0,
                mt: "95px",
                width: "176px",
                height: "60px",
                fontSize: "18px",
              }}
              disableElevation>
              დამახსოვრება
            </Button>
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
