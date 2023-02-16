import React, { useEffect } from "react";

// import classes
import classes from "./styles.module.css";

//router link
import { Link } from "react-router-dom";

// backBtn
import BackBtn from "../../components/UI/backBtn/BackBtn";

// header
import Header from "../../components/header/Header";

const Employer = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F6F6F6";
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Link to="/">
        <BackBtn />
      </Link>
      <Header />
      <section className={classes["section-container"]}>
        <form className={classes["form-container"]} onSubmit={submitHandler}>
          <div className="flex-container ">
            <div className="input-div">
              <label htmlFor="name">სახელი</label>
              <input type="text" name="name" placeholder="გრიშა" />
              <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
            </div>
            <div className="input-div">
              <label htmlFor="surname">გვარი</label>
              <input type="text" name="surname" placeholder="ბაგრატიონი" />
              <p>მინიმუმ ორი სიმბოლო, ქართული ასოები</p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Employer;
