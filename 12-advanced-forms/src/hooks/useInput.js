import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

// vaildation logic should be passed in here, reducer function
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return state;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const errorState = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    errorState,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;

// useState version
// import { useState } from "react";

// // vaildation logic should be passed in here

// const useInput = (validateValue) => {
//   const [input, setInput] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valueIsValid = validateValue(input);
//   const errorState = !valueIsValid && isTouched;

//   const valueChangeHandler = (event) => {
//     setInput(event.target.value);
//   };

//   const inputBlurHandler = () => {
//     setIsTouched(true);
//   };

//   const reset = (  ) => {
//     setInput('');
//     setIsTouched('');
//   };

//   return {
//     value: input,
//     valueIsValid,
//     errorState,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset,
//   };
// };
// export default useInput;
