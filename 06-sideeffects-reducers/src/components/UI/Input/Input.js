import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

// ref is the other thing you can accept beside props. It binds a ref from the parent component. 
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };

  // Lets you use functions imperatively outside of the component.
  useImperativeHandle(ref , () => {
    return {
        focus: activate, 
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.email}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
