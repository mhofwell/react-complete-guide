import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";

const AddUser = ({ AddUserHandler }) => {
  const [un, setUn] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (un.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age.",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age.",
      });
      return;
    }

    const user = {
      id: Math.floor(Math.random() * 100),
      un: un,
      age: age,
    };

    AddUserHandler(user);

    setUn("");
    setAge("");
  };

  const unChangeHandler = (e) => {
    setUn(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const closeModal = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal error={error} closeModal={closeModal} />}
      <Card className={classes.input}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={un}
            onChange={unChangeHandler}
            type="text"
            id="username"
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            value={age}
            onChange={ageChangeHandler}
            type="text"
            id="age"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

// label and attached input by htmlFor prop.
// add a + to force a string to a number
