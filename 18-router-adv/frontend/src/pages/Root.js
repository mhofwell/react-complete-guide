import { Outlet } from "react-router-dom";
import React from "react";
import MainNavigation from "../components/MainNavigation";
import { useNavigation } from "react-router-dom";

const RootLayout = () => {
  // allows you to get the state of then navigation. Are you waiting for data? nav.state accesses the state of loading
  const nav = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {nav.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
