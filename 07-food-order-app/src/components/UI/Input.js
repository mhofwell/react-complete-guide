import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    return(
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input ref={ref} {...props}/>
        </div>
    )
});
export default Input;
// the spread operator {...props.input} ensures that all props passed 
// to the component will apply to the element its called on.