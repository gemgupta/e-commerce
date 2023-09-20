import { useState, useContext } from "react";
import Items from "./Components/Products/Items";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { Route, Routes, Navigate } from "react-router-dom";
import ContactUs from "./Components/Contact/ContactUs";
import ProductDes from "./Components/ProductDes/ProductDes";
import Fetch from "./Components/Authentication/Fetch";

import CartItem from "./Components/Cart/CartItem";
import AuthContext from "./Components/Store/AuthContext";

function App() {
  const [showCart, setshowCart] = useState(false);

  const Authctx = useContext(AuthContext);
  const onOpen = () => {
    setshowCart(!showCart);
  };
  const onClose = () => {
    setshowCart(false);
  };

  return (
    <>
      <Nav Open={onOpen} />
      {showCart && <CartItem close={onClose} />}
      <Routes>
        {Authctx.isLoggedIn && <Route exact path="/" element={<Items />} />}
        <Route exact path="/Login" element={<Fetch />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route path="/Product/:id" element={<ProductDes />} />
        <Route path="*" element={<Navigate replace to="/Login" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
