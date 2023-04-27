import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const context = useContext(CartContext);
  const totalAmount = context.totalAmount.toFixed(2);
  const hasItems = context.items.length > 0;
  
  const itemRemoveHandler = (id) => {
    context.removeItem(id);
  };

  const itemAddHandler = (item) => {
    context.addItem({...item, amount: 1});
  };

  const mealsList = context.items.map((item) => {
    return (
      <CartItem
        onRemove={itemRemoveHandler.bind(null, item.id)}
        onAdd={itemAddHandler.bind(null, item)}
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
    );
  });

  return (
    <Modal onClose={props.onClose}>
      <ul>{mealsList}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
