import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

// Reducer function is created outside of the scope of the component function.
// Because we use no data generated from inside the component function.
// The data it needs will be passed in automatically by React.

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  // returns some state
  return { value: "", isValid: false };
};

const pwReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  // returns some state
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [pwState, dispatchPw] = useReducer(pwReducer, {
    value: "",
    isValid: null,
  });

  const context = useContext(AuthContext);
  const emailInputRef = useRef();
  const pwInputRef = useRef();

  // side effects are http requests, or, when we're listening to keystrokes and we want to call a function
  // based on data. Its a side effect of the user entering data.

  useEffect(() => {
    console.log("Effect Running");
    return () => {
      console.log("cleanup");
    };
  }, []);

  // use object destructuring to pull out the 'valid' state of the input. This will make the effet run only when the valid state changes, not on every input char change.
  const { isValid: emailValid } = emailState;
  const { isValid: pwValid } = pwState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking validity");
      setFormIsValid(emailValid && pwValid);
    }, 500);

    // cleanup function runs to clear the timer for subsequent dependency changes. Once
    // a second keystroke is hit the return function from the first call runs and then the
    // useEffect is run all over again.

    return () => {
      console.log("Clearing");
      clearTimeout(identifier);
    };
  }, [emailValid, pwValid]);

  const emailChangeHandler = (event) => {
    // the object below is the 'action' object the reducer takes.
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   emailState.isValid && pwState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && pwState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPw({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      context.onLogin(emailState.value, pwState.value);
    } else if (!emailValid) {
      emailInputRef.current.focus(); 
    } else {
      pwInputRef.current.focus(); 
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={pwInputRef}
          id="password"
          label="Password"
          type="password"
          value={pwState.value}
          isValid={pwValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// useEffect runs once when you include [] as dependencies only.
// debounce input. We're not checking on every keystroke.

// when you're depending on the previous state snapshot of a singular state
// use the function form of setState(() => {}); When you're depending on
// one or more different states; useReducer;

// Do not derive state of A by looking at and/or using methods on other states, state B, with useState.
// This is for useReducer. Updating one state when looking at another = useReducer.
