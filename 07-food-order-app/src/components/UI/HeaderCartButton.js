import React, { useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import "../Cart/CartIcon";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const context = useContext(CartContext);
  const [buttonBump, setButtonBump] = useState(false);
  const { items } = context;

  const numberOfItems = context.items.reduce((currentNumber, item) => {
    //The first time that the callback is run there is no "return value of the previous calculation".
    //If supplied, an initial value may be used in its place. Otherwise the array element at index 0
    //is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
    //Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array

    return currentNumber + item.amount;
  }, 0);

  const buttonClasses = `
${classes.button}
${buttonBump ? classes.bump : ""}
`;

  useEffect(() => {
    if (context.items.length === 0) {
      return;
    }
    setButtonBump(true);

   const timer = setTimeout(() => {
      setButtonBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
      };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};
export default HeaderCartButton;
