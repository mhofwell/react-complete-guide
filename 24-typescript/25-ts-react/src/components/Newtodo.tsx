import React from "react";
import { useRef } from "react";
import classes from "./Newtodo.module.css";

// use void if you have no expected return value

const Newtodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // useRef<>() in this case needs a starting value - we use null
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    // using ! instead of ? tells TS you know it will never be null. Hover over entered text to see its value will be a string.
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" type="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default Newtodo;
