import React, { useEffect, useState } from "react";

//useMavigate
import { useNavigate } from "react-router-dom";

// import classes
import classes from "./styles.module.css";

//router link
import { Link } from "react-router-dom";

// backBtn
import BackBtn from "../../components/UI/backBtn/BackBtn";

// header
import Header from "../../components/header/Header";

// costum hook
import useInput from "../../hooks/useInput";

// mui button
import MuiButton from "../../components/UI/muiButton/MuiButton";

const patterns = {
  name: /^[ა-ჰ]{2,}$/,
  surname: /^[ა-ჰ]{2,}$/,
  mail: /^[a-zA-Z\d\.-]+@redberry\.ge$/,
  phoneNumber: /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/,
};

const Employer = () => {
  // name validation
  const {
    value: enteredNameValue,
    isValid: enteredNameIsValid, // is form valid?
    valueChangeHandler: nameInputChangedHandler,
    inputBlurHandler: nameInputBlurHandler,
    inputClasses: nameInputClasses,
    onSubmit: enteredNameSubmited,
  } = useInput((value) => patterns.name.test(value), "name");

  //surname validation
  const {
    value: enteredSurnameValue,
    isValid: enteredSurnameIsValid, // is form valid?
    valueChangeHandler: surnameInputChangedHandler,
    inputBlurHandler: surnameInputBlurHandler,
    inputClasses: surnameInputClasses,
    onSubmit: enteredSurnameSubmited,
  } = useInput((value) => patterns.surname.test(value), "surname");

  //mail validation
  const {
    value: enteredMailValue,
    isValid: enteredMailIsValid, // is form valid?
    valueChangeHandler: mailInputChangedHandler,
    inputBlurHandler: mailInputBlurHandler,
    inputClasses: mailInputClasses,
    onSubmit: enteredMailSubmited,
  } = useInput((value) => patterns.mail.test(value), "mail");

  //phoneNumber validation
  const {
    value: enteredPhoneNumberValue,
    isValid: enteredPhoneNumberIsValid, // is form valid?
    valueChangeHandler: phoneNumberInputChangedHandler,
    inputBlurHandler: phoneNumberInputBlurHandler,
    inputClasses: phoneNumberInputClasses,
    onSubmit: enteredPhoneNumberSubmited,
  } = useInput((value) => patterns.phoneNumber.test(value), "phoneNumber");

  // description
  const [enteredDescriptionValue, setEnteredDescriptionValue] = useState(
    localStorage.getItem("description") || ""
  );

  // // image
  const [image, setImage] = useState(localStorage.getItem("image") || "");
  const [isImageTouched, setIsImageTouched] = useState(false);

  // navigate
  const navigate = useNavigate();

  // localstorage(set items)
  useEffect(() => {
    localStorage.setItem("name", enteredNameValue);
    localStorage.setItem("surname", enteredSurnameValue);
    localStorage.setItem("mail", enteredMailValue);
    localStorage.setItem("phoneNumber", enteredPhoneNumberValue);
    localStorage.setItem("description", enteredDescriptionValue);
    localStorage.setItem("image", image);
  }, [
    enteredNameValue,
    enteredSurnameValue,
    enteredMailValue,
    enteredPhoneNumberValue,
    enteredDescriptionValue,
    image,
  ]);

  // change background color
  useEffect(() => {
    document.body.style.backgroundColor = "#F6F6F6";
  }, []);

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();

    // submited
    enteredNameSubmited(true);
    enteredSurnameSubmited(true);
    enteredMailSubmited(true);
    enteredPhoneNumberSubmited(true);
    setIsImageTouched(true);

    if (formIsValid) {
      navigate("/laptop-options");
    }
  };

  // image
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredMailIsValid &&
    enteredSurnameIsValid &&
    enteredMailIsValid &&
    enteredPhoneNumberIsValid &&
    image
  ) {
    formIsValid = true;
  }

  return (
    <>
      <Link to="/">
        <BackBtn />
      </Link>
      <Header />
      <section className="section-container">
        <form className={classes["form-container"]}>
          {/* name and surname  */}
          <div className="flex-container ">
            <div className={nameInputClasses}>
              <label htmlFor="name">სახელი</label>
              <input
                type="text"
                name="name"
                value={enteredNameValue}
                onChange={nameInputChangedHandler}
                onBlur={nameInputBlurHandler}
                placeholder="გრიშა"
                autoComplete="new-name"
              />
              <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
            </div>
            <div className={surnameInputClasses}>
              <label htmlFor="surname">გვარი</label>
              <input
                type="text"
                name="surname"
                value={enteredSurnameValue}
                onChange={surnameInputChangedHandler}
                onBlur={surnameInputBlurHandler}
                placeholder="ბაგრატიონი"
                autoComplete="new-surname"
              />
              <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
            </div>
          </div>
          {/* upload image */}
          <div className={classes["upload-photo"]}>
            <span>პირადი ფოტოს ატვირთვა</span>
            <label htmlFor="upload-img">
              ატვირთვა
              <input
                type="file"
                id="upload-img"
                name="upload-img"
                onChange={onImageChange}
              />
            </label>
            {image !== "" ? (
              <img
                src="./assets/images/success.png"
                className={classes.photo}
                alt="success"
              />
            ) : isImageTouched && image === "" ? (
              <img src="./assets/images/danger.png" alt="danger" />
            ) : null}
          </div>
          {/* textarea */}
          <div className={classes.textarea}>
            <label htmlFor="aboutMe">ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              name="aboutMe"
              value={enteredDescriptionValue}
              onChange={(e) => setEnteredDescriptionValue(e.target.value)}
              placeholder="ზოგადი ინფო შენს შესახებ"></textarea>
          </div>
          {/* email */}
          <div className={mailInputClasses} id={classes.mail}>
            <label htmlFor="mail">მეილი</label>
            <input
              type="text"
              name="mail"
              value={enteredMailValue}
              onChange={mailInputChangedHandler}
              onBlur={mailInputBlurHandler}
              placeholder="grish666@redberry.ge"
              autoComplete="new-mail"
            />
            <p>უნდა მთავრდებოდეს redberry.ge-ით</p>
          </div>
          {/* phoneNumber */}
          <div className={phoneNumberInputClasses} id={classes.phoneNumber}>
            <label htmlFor="phoneNumber">მობილურის ნომერი</label>
            <input
              type="text"
              name="phoneNumber"
              value={enteredPhoneNumberValue}
              onChange={phoneNumberInputChangedHandler}
              onBlur={phoneNumberInputBlurHandler}
              placeholder="+995 598 91 14 52"
              autoComplete="new-phoneNumber"
            />
            <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
          </div>
          <div className={classes["btn-container"]}>
            <MuiButton
              submitHandler={submitHandler}
              text="შემდეგი"
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

export default Employer;
