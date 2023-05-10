import React from "react";
import PageContent from "../components/PageContent";
// React gives you a hook to display the Response in the component throwing the error
import { useRouteError } from "react-router";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();
  const status = error.status;
  // throw responses rather than regular objects, you can adjust the objects passed in.

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    // json parsing is done by reaect router we don't needto JSON.stringify() it
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find page or resource.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
        <p>Error code: {status ? {status} : 'Unknown cause'}</p>
      </PageContent>
    </>
  );
};
export default Error;
