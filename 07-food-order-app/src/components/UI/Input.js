import React from 'react';
import classes from './Input.module.css'

const Input = (props) => {

    return(
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    )
};
export default Input;
// the spread operator {...props.input} ensures that all props passed to the component will apply to the element its called on.