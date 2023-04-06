import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({onFormSubmit}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    onFormSubmit(formData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//If you're updating state and it depends on the previous state, use a function form to update state to guarantee you update *with* the
//latest state snapshot

// const [userInput, setUserInput] = useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:'',
// });

// const titleChangeHandler = (e) => {
//     setUserInput((prevState)=>{
//         return {...prevState,enteredTitle: e.target.value}
//     });
// }
