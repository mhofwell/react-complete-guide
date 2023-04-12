import React, { useState } from "react";
import classes from "./AddUsers.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const AddUser = ({AddUserHandler}) => {
  const [un, setUn] = useState("");
  const [age, setAge] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(un, age);
    if (un.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+age < 1) {
      return;
    }

    const user = {
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

  return (
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
  );
};

export default AddUser;

// label and attached input by htmlFor prop.
// add a + to force a string to a number
