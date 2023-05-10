import { useNavigate, useNavigation, useActionData } from "react-router-dom";
import React from "react";
import { Form } from "react-router-dom";
import classes from "./EventForm.module.css";
import { json, redirect } from "react-router-dom";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const isSubmitting = navigation.state === "submitting";
  console.log(isSubmitting);

  function cancelHandler() {
    navigate("..");
  }

  return (
    // will trigger the action function of the currently active route. The route for which the form was loaded.
    // action={} prop sends data to a different route.
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const id = params.id;
    url = url + "/" + id;
  }

  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (res.status === 422) {
    // returning a response in an action here to help with back-end validation error responses being shown to user.
    return res;
  }

  if (!res.ok) {
    // this shows error page
    throw json({ message: "Could not save event" }, { status: 500 });
  }
  // redirect creates a special response object that redirects a user to a separate page
  return redirect("/events");
}

// actions can send data
