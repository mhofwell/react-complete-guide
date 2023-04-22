import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  
  const INPUT_PROPS = {
        id: props.id,
        type: "number",
        min: "0",
        max: "5",
        step: "1",
        defaultValue: "1",
  };

    return (
    <form className={classes.form}>
      <Input
        label="Amount"
        // used the spread operator to put lots of props into the Input component.
        input={{...INPUT_PROPS}}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealItemForm;
