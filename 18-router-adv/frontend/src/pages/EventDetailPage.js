import React from "react";
import { json, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return <EventItem event={data.event} />;
};
export default EventDetailPage;

// since we can't use hooks like useParams we have to extract it from the object React passes into loader by default.
export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const id = params.id;
  // setting the method on the fly here, 'DELETE'
  const method = request.method;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: method,
  });
  if (!response.ok) {
    throw json(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
}
