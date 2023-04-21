import React, {useContext} from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const loginStatus = localStorage.getItem("isLoggedIn");

  //   if (loginStatus === 1) {
  //     setIsLoggedIn(true);
  //   }
  // }, [isLoggedIn]);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const context = useContext(AuthContext);

  return (
    // context can pass functions as well as values.
    <>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;

// pass components and don't use context if you're using the function in
// the component. useContext() for vars or state you need globally and or
// you need to forward stuff through multiple components.
