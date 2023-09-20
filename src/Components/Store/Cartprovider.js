import React from "react";
import { useState } from "react";
import CartContext from "./CartContext";

function CartProvider(props) {
  const [items, setitem] = useState([]);
  const [quantity, setquantity] = useState(0);

  //   adding items by finding their index and checking if they are already present or not
  const addItemHandler = (item1) => {
    const itemIndex = items.findIndex((item) => item.id === item1.id);
    const existingCartItem = items[itemIndex];

    if (existingCartItem) {
      existingCartItem.amount = Number(existingCartItem.amount) + 1;
      setquantity(existingCartItem.amount);
    } else {
      setitem([ ...items,item1]);
    }
  };
  
  let totalAmount = 0;
  items.forEach((item) => {
    totalAmount = totalAmount + item.price * item.amount;
  });
  const removeItenHandler = (id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    const existingCartItem = items[itemIndex];
    if (existingCartItem && existingCartItem.amount > 1) {
      existingCartItem.amount = Number(existingCartItem.amount) - 1;
      setquantity(existingCartItem.amount);
    } else {
      const updatedItem = items.filter((item) => item.id !== id);
      setitem([...updatedItem]);
    }
  };

  const CartContext1 = {
    item: items,
    quantity: quantity,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItenHandler,
  };
  return (
    <CartContext.Provider value={CartContext1}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
