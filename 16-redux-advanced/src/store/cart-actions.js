import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";
// action creators created outside of the slice
// this is a thunk, it contains async and returns a function.
// react forwards the dispatch action into this as well.

export const fetchCartData = () => {
  // anonymous function that takes dispatch as an argument
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://order-app-f9ea7-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) {
        throw new Error("Fetching data failed.");
      }
      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
          })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error fetching cart data.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://order-app-f9ea7-default-rtdb.firebaseio.com/cart.json",
        {
          /// put requests overwrite data rather than add data to a list
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Sending data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sent",
          message: "Sent cart data.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Error sending cart data.",
        })
      );
    }
  };
};
