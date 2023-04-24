import React from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
const MealItem = ({meal}) => {

    const price = `$${meal.price.toFixed(2)}`;

    return(
        <li id={meal.id} className={classes.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={classes.description}>{meal.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
            <MealItemForm id={meal.id} />
            </div>
        </li>
    )
};
export default MealItem;

// .toFixed() rounds the number to as many decimals as you pass into it