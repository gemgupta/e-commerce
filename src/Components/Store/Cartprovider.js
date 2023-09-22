import React from "react";
import { useState } from "react";
import CartContext from "./CartContext";
// import Alert from "react-bootstrap/Alert";
// import axios from "axios";
function CartProvider(props) {
  const [items, setitem] = useState([]);
  const [quantity, setquantity] = useState(0);
  // const [showAlert, setShowAlert] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  //   adding items by finding their index and checking if they are already present or not
  const addItemHandler = (item1) => {
    const itemIndex = items.findIndex((item) => item.id === item1.id);
    const existingCartItem = items[itemIndex];

    if (existingCartItem) {
      // setShowAlert(true);
    } 
    else {
      setitem((prevItems) => [...prevItems, { ...item1, quantity: 1 }]);
      setTotalAmount((prevTotal) => prevTotal + items.price);
    }
  };

 
  // const removeItenHandler = (id) => {
  //   const itemIndex = items.findIndex((item) => item.id === id);
  //   const existingCartItem = items[itemIndex];
  //   if (existingCartItem && existingCartItem.amount === 1) {
  //     const updatedItem = items.filter((item) => item.id !== id);
  //     setitem([...updatedItem]);
  //   }
  //   try {
  //     axios.delete(
  //       `https://crudcrud.com/api/22a3c72faee142dd93a72ac596dfd397/ecommerce/${id}`
  //     );
  //   } catch (error) {
  //     console.error(
  //       "Error deleting item from remote data:",
  //       error.response.data
  //     );
  //   }
  //   // Update total amount by subtracting the item's price
  //   setTotalAmount(
  //     (prevTotalAmount) => prevTotalAmount - existingCartItem.price
  //   );
  // };
   const getLengthHandler= (quant)=>{
    setquantity(quant)
   }

  const CartContext1 = {
    item: items,
    setTotalAmount: setTotalAmount,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    getlength: getLengthHandler,
    quantity: quantity
  };
  return (
    <CartContext.Provider value={CartContext1}>
      {props.children}
      {/* {showAlert && (
        <Alert variant="warning" onClose={closeAlertHandler} dismissible>
          This item is already added to the cart
        </Alert>
      )} */}
    </CartContext.Provider>
  );
}

export default CartProvider;
