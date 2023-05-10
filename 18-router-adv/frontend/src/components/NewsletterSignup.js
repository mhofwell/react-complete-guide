import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

function NewsletterSignup() {
  // fetcher gives you a form object and submit action but it will not initialize a route transactoin.
  // should be used to trigger an action or loader when you don't want to navigate to those pages / trigger a page refresh. 
  const fetcher = useFetcher();
  // state gets from fetcher tells you if the action or loader was completed or not
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
