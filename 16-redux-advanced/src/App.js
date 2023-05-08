import Cart from "./components/Cart/Cart";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification.js";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInit = true;

function App() {
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.ui.visible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // great way of using side effects outside of the reducer component. This fires every time the cart state changes.
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [dispatch, cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {visible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
