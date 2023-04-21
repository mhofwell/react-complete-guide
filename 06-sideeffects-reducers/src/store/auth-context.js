import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// need to wrap components that need access in the AuthContext. called "providing".
// <AuthContext.Provider> {children} </AuthContext.Provider>
// in the component you want to consume the Context use: <AuthContext.Consumer>{children}</AuthContext.Consumer>s

// put all functions here as it will auto-suggest it in VS code when you're
// accessing the context.

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus === 1) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);
  
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
