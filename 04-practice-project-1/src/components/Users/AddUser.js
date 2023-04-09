import React from "react";
import classes from "./AddUsers.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const AddUser = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age (Years)</label>
        <input type="text" id="age"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

// label and attached input by htmlFor prop.
