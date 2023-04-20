import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

  const unRef = useRef();
  const ageRef = useRef(); 
  
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const name = unRef.current.value
    const age = ageRef.current.value
    if ( name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(name, age);

    unRef.current.value = '';
    ageRef.current.value = '';
    
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={unRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

// ref's store real DOM node / element. So we can access x.current.value of the REF. 
// if you want to only read a value REFs are fine. You can use useState as well, its fine if you need to rely on prev state. 
// accessing values with a REF are now uncontrolled components. State approach useState is a controlled component.