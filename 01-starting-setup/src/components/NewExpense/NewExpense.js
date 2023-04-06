import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onNewExpense}) => {

  const formSubmitHandler = (formData) =>{
    const newExpense = {
      ...formData, 
      id: Math.random().toString(), 
    }
    onNewExpense(newExpense);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onFormSubmit={formSubmitHandler} />
    </div>
  );
};

export default NewExpense;