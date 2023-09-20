import React from "react";
import ReactDOM from "react-dom/client";
// import CartProvider from './Components/Store/Cartprovider';
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import CartProvider from "./Components/Store/Cartprovider";
import AuthProvider from "./Components/Store/AuthProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <CartProvider>
      <AuthProvider>
        <App />
        </AuthProvider>
      </CartProvider>
     
    </BrowserRouter>
  </React.StrictMode>
);
