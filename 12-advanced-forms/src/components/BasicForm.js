import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: fn,
    valueIsValid: fnIsValid,
    errorState: fnErrorState,
    valueChangeHandler: fnChangeHandler,
    inputBlurHandler: fnBlurHandler,
    reset: fnReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: ln,
    valueIsValid: lnIsValid,
    errorState: lnErrorState,
    valueChangeHandler: lnChangeHandler,
    inputBlurHandler: lnBlurHandler,
    reset: lnReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    errorState: emailErrorState,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const fnClasses = fnErrorState ? "form-control invalid" : "form-control";

  const lnClasses = lnErrorState ? "form-control invalid" : "form-control";

  const emailClasses = emailErrorState ? "form-control invalid" : "form-control";

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!fnIsValid || !lnIsValid || !emailIsValid) {
      return;
    }
    fnReset();
    lnReset();
    emailReset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="control-group">
        <div className={fnClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onBlur={fnBlurHandler}
            onChange={fnChangeHandler}
            type="text"
            id="name"
            value={fn}
          />
          {fnErrorState && (
            <p className={"error-text"}>Enter a valid first name.</p>
          )}
        </div>
        <div className={lnClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            onBlur={lnBlurHandler}
            onChange={lnChangeHandler}
            type="text"
            id="name"
            value={ln}
          />
          {lnErrorState && (
            <p className={"error-text"}>Enter a valid last name.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="text"
          id="name"
          value={email}
        />
        {emailErrorState && (
          <p className={"error-text"}>Enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;



//useState version
// import useInput from "../hooks/useInput";

// const BasicForm = (props) => {
//   const {
//     value: fn,
//     valueIsValid: fnIsValid,
//     errorState: fnErrorState,
//     valueChangeHandler: fnChangeHandler,
//     inputBlurHandler: fnBlurHandler,
//     reset: fnReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: ln,
//     valueIsValid: lnIsValid,
//     errorState: lnErrorState,
//     valueChangeHandler: lnChangeHandler,
//     inputBlurHandler: lnBlurHandler,
//     reset: lnReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     value: email,
//     valueIsValid: emailIsValid,
//     errorState: emailErrorState,
//     valueChangeHandler: emailChangeHandler,
//     inputBlurHandler: emailBlurHandler,
//     reset: emailReset,
//   } = useInput((value) => value.includes("@"));


//   const [state, dispatchFn] = useReducer((prevState, action) => newState, initState, initFn);

//   const fnClasses = fnErrorState ? "form-control invalid" : "form-control";

//   const lnClasses = lnErrorState ? "form-control invalid" : "form-control";

//   const emailClasses = emailErrorState ? "form-control invalid" : "form-control";

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!fnIsValid || !lnIsValid || !emailIsValid) {
//       return;
//     }
//     fnReset();
//     lnReset();
//     emailReset();
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div className="control-group">
//         <div className={fnClasses}>
//           <label htmlFor="name">First Name</label>
//           <input
//             onBlur={fnBlurHandler}
//             onChange={fnChangeHandler}
//             type="text"
//             id="name"
//             value={fn}
//           />
//           {fnErrorState && (
//             <p className={"error-text"}>Enter a valid first name.</p>
//           )}
//         </div>
//         <div className={lnClasses}>
//           <label htmlFor="name">Last Name</label>
//           <input
//             onBlur={lnBlurHandler}
//             onChange={lnChangeHandler}
//             type="text"
//             id="name"
//             value={ln}
//           />
//           {lnErrorState && (
//             <p className={"error-text"}>Enter a valid last name.</p>
//           )}
//         </div>
//       </div>
//       <div className={emailClasses}>
//         <label htmlFor="name">E-Mail Address</label>
//         <input
//           onBlur={emailBlurHandler}
//           onChange={emailChangeHandler}
//           type="text"
//           id="name"
//           value={email}
//         />
//         {emailErrorState && (
//           <p className={"error-text"}>Enter a valid email.</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default BasicForm;
