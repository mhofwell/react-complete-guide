import { useState } from "react";
import useInput from "../hooks/useInput";

const SimpleInput = () => {
  const {
    value: name,
    valueIsValid: enteredNameIsValid,
    errorState: nameErrorState,
    valueChangeHandler: nameValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    errorState: emailErrorState,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !emailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameErrorState
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailErrorState
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameValueChangeHandler}
          onBlur={nameInputBlurHandler}
          value={name}
        />
        {nameErrorState && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailValueChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailErrorState && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
// Don't manipulate the DOM!
