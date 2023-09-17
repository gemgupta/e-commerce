import { useState, useContext } from "react";
import Items from "./Components/Products/Items";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/Cartprovider";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { Route, Routes, Navigate } from "react-router-dom";
import ContactUs from "./Components/Contact/ContactUs";
import ProductDes from "./Components/ProductDes/ProductDes";

import Fetch from "./Components/Authentication/Fetch";
import CartContext from "./Components/Store/CartContext";

function App() {
  const [showCart, setshowCart] = useState(false);
  const ctx = useContext(CartContext);
  const onOpen = () => {
    setshowCart(!showCart);
  };
  const onClose = () => {
    setshowCart(false);
  };

  return (
    <CartProvider>
      <Nav Open={onOpen} />
      {showCart && <Cart close={onClose} />}
      <Routes>
        {ctx.isLoggedIn && <Route exact path="/" element={<Items />} />}
        <Route exact path="/Login" element={<Fetch />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route path="/Product/:id" element={<ProductDes />} />
        <Route path="*" element={<Navigate replace to="/Login" />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}

export default App;
