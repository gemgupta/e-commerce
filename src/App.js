import { useState } from "react";
import Items from "./Components/Products/Items";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/Cartprovider";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/Contact/ContactUs";
import ProductDes from "./Components/ProductDes/ProductDes";

import Fetch from "./Components/Authentication/Fetch";

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
      {showCart && <Cart close={onClose} />}
      <Routes>
        <Route exact path="/" element={<Items />} />
        <Route exact path="/Login" element={<Fetch />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route path="/Product/:id" element={<ProductDes />} />
      </Routes>

      
      <Footer />
    </CartProvider>
  );
}

export default App;
