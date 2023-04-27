import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />};
      <Header onOpenCart={showCartHandler}>Let's get started!</Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

// whenever you have more than 1 state you need to manage that with React