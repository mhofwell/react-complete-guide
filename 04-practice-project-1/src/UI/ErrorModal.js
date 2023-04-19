import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ error, closeModal }) => {
  
    return (
    <>
      <div className={classes.backdrop} onClick={closeModal} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={closeModal}>Close</Button>
        </footer>
      </Card>
    </>
  );
};
export default ErrorModal;
