// import { Await } from "react-router";
// import { Suspense } from "react";
// react router gives you a hook that lets you check the state of your loading

// function EventsPage() {
//   const { events } = useLoaderData();

//   return (
//     // renders component now before data arrives.
//     <Suspense fallback={<p style={{ textAlign: "center" }}>Loading... </p>}>
//       <Await resolve={events}>
//         {(loadedEvents) => {
//           <EventsList events={loadedEvents} />;
//         }}
//       </Await>
//     </Suspense>
//   );
// }

import EventsList from "../components/EventsList";
import { useLoaderData, json } from "react-router";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

// creating the loader in the component which needs the data is typically the right pattern
// loaders load when you call to load a page initially, not after the components load as in useEFfect
export const loader = async () => {
  // can use anything in the browser for loader like broswer APIs like LocalStorage. You can't use React features like hooks.
  // fetch returns a Promise that resolves as a promise.
  // means we can take the response object and return that in our loader. Loader will extracat the data thats a part of the response.
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // you can just use the json method from react-router-dom to emit a json formatted Response
    return json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    // this data is automatically made available to this EventsPage component.
    // b/c this is async await its sent as a promise to the component. React will automatically resolve the promise for you, though.
    return response;
  }
};
