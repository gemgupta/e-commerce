import { useState } from "react";
import Items from "./Components/Products/Items";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/Cart";

function App() {
  const [showCart, setshowCart] = useState(false);
  const onOpen = () => {
    setshowCart(true);
  };
  const onClose = () => {
    setshowCart(false);
  };

  return (
    <>
      <Nav Open={onOpen} />
      {showCart && <Cart close={onClose} />}
      <Items />
    </>
  );
}

export default App;
