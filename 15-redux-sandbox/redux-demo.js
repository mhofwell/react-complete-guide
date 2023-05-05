const redux = require("redux");

// should be a pure function that doesn't use side effects like http requests
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "DEC") {
      return {
          counter: state.counter - 1,
        };
    }
    return state;
};

// create the store
const store = redux.createStore(counterReducer);

// subscription functions
const counterSubscription = () => {
  const currentState = store.getState();
  console.log(currentState);
};

store.subscribe(counterSubscription);

// dispatch function queries the counterReducer
store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
