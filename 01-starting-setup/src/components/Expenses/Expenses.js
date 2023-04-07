import React, { useState } from "react";
import Card from "../../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import './ExpensesList.css';

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2022");

  const handleChangeYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    // filter leaves the original array untouched.
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onYearSelect={handleChangeYear} defaultYear={year} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;



// You can use ternaries in React: 

// _condition to check_ ? if_true : if_false 

// - you can use { functions } in the ternary return on either side of 
// the : 
// - you can also use the && on a conditional check. 
// -- {filteredExpenses.length === 0 && <div>No Expenses!</div>}
// - array.map (item => {transformation});
// - array.filter (item =>{criteria}); 

