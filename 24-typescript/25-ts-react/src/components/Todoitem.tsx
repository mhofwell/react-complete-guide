import React from "react";
import classes from "./Todoitem.module.css";

const Todoitem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};
export default Todoitem;
