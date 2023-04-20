import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// Reducer function is created outside of the scope of the component function.
// Because we use no data generated from inside the component function.
// The data it needs will be passed in automatically by React.

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return {value: state.value, isValid: state.value.includes('@')}
  }
  // returns some state
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  // side effects are http requests, or, when we're listening to keystrokes and we want to call a function
  // based on data. Its a side effect of the user entering data.

  // useEffect(() => {
  //   console.log("Effect Running");
  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("checking validity");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  // cleanup function runs to clear the timer for subsequent dependency changes. Once
  // a second keystroke is hit the return function from the first call runs and then the
  // useEffect is run all over again.

  //   return () => {
  //     console.log("Clearing");
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // the object below is the 'action' object the reducer takes. 
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      emailState.value.includes("@" && event.target.value.trim().length > 6)
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// useEffect runs once when you include [] as dependencies only.
// debounce input. We're not checking on every keystroke.

// when you're depending on the previous state snapshot of a singular state
// use the function form of setState(() => {}); When you're depending on
// one or more different states; useReducer;

// Do not derive state of A by looking at and/or using methods on other states, state B, with useState.
// This is for useReducer. Updating one state when looking at another = useReducer.
