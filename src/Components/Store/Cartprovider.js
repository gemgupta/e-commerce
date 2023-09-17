import React from "react";
import { useState } from "react";
import CartContext from "./CartContext";
import {  useNavigate } from "react-router";
function CartProvider(props) {
  const localToken= localStorage.getItem('token')
  const [items, setitem] = useState([]);
  const [quantity, setquantity] = useState(0);
  const [Token, setToken] = useState(localToken);
  const navigate= useNavigate()
  //   adding items by finding their index and checking if they are already present or not
  const addItemHandler = (item1) => {
    const itemIndex = items.findIndex((item) => item.id === item1.id);
    const existingCartItem = items[itemIndex];

    if (existingCartItem) {
      existingCartItem.quantity =
        Number(existingCartItem.quantity) + Number(item1.quantity);
      setquantity(existingCartItem.quantity);
    } else {
      setitem([...items, item1]);
    }
  };
  let totalAmount = 0;
  items.forEach((item) => {
    totalAmount = totalAmount + item.price * item.quantity;
  });
  const removeItenHandler = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const existingCartItem = items[itemIndex];
    if (existingCartItem && existingCartItem.quantity >= 1) {
      existingCartItem.quantity = Number(existingCartItem.quantity) - 1;
      setquantity(existingCartItem.quantity);
    }
    if (existingCartItem.quantity === 0) {
      const updatedItem = items.filter((item) => item.id !== id);
      setitem([...updatedItem]);
    }
  };
  //below code for LogIn and LogOut Functionallity
  const userIsLoggedIn = !!Token;
  const LoginHandler= (Token)=>{
    setToken(Token)
    localStorage.setItem('token', Token)

  }
  const LogoutHandler= ()=>{
    setToken(null)
    navigate('/Login')
    localStorage.removeItem('token')

  }
  const CartContext1 = {
    item: items,
    quantity: quantity,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItenHandler,
    Token: Token,
    Login: LoginHandler,
    Logout: LogoutHandler,
    isLoggedIn: userIsLoggedIn
  };
  return (
    <CartContext.Provider value={CartContext1}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
