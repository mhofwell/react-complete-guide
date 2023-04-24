import React from "react";
import mealImg from "../../../src/assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "../UI/HeaderCartButton";

const Header = (props) => {

  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImg} alt="A table full of food"></img>
      </div>
    </>
  );
};
export default Header;
