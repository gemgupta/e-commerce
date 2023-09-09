import { useState } from "react";
import Items from "./Components/Products/Items";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/Cartprovider";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import { Route, Routes } from "react-router-dom";

function App() {
  const [showCart, setshowCart] = useState(false);
  const onOpen = () => {
    setshowCart(!showCart);
  };
  const onClose = () => {
    setshowCart(false);
  };

  // const router = createBrowserRouter([
  //   {
  //     path: "/home",
  //     element: <Items />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);

  return (
    <CartProvider>
      <Nav Open={onOpen} />
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route exact path="/" element={<Items/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>

      {showCart && <Cart close={onClose} />}
      <Footer/>
    </CartProvider>
  );
}

export default App;
