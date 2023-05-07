import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();

  //useSelector automatically sets up & clears a subscription between the component and a specific variable in the store.
  
  // state.counter =  counter: counterSlice.reducer, and .counter on that goes to initialState: initialCounterState, (which is 0)
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.add1())
  };

  // when you dispatch, you dispatch an action object:{ action.type, action.amount }

  const decrementHandler = () => {
    dispatch(counterActions.sub1())
  };

  const increase = () => {
    dispatch(counterActions.incby(10)); // React automatically creates {type: SOME UNIQUE ID, payload: 10}
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// useSelector or useStore are appropriate.

