import { useState } from "react";
import Items from "./Components/Products/Items";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/Cartprovider";

function App() {
  const [showCart, setshowCart] = useState(false);
  const onOpen = () => {
    setshowCart(!showCart);
  };
  const onClose = () => {
    setshowCart(false);
  };

  return (
    <CartProvider>
      <Nav Open={onOpen} />
      <Items />
      {showCart && <Cart close={onClose} />}
    </CartProvider>
  );
}

export default App;
