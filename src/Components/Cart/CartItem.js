import axios from "axios";
import CartContext from "../Store/CartContext";
import Cart from "./Cart";

import { useContext, useEffect } from "react";
import AuthContext from "../Store/AuthContext";

function CartItem(props) {
  const Cartctx = useContext(CartContext);
  const Authctx = useContext(AuthContext);
 
  console.log(Cartctx.item)

  useEffect(() => {
    async function fetchCartItems() {
     if(Authctx.Token){
        try {
          const removeemail = Authctx.email.replace(/[.@]/g, "");
          const response = await axios.get(
            `https://crudcrud.com/api/b1d3cc6f1ee64267ba2919167c5bf88a/${removeemail}`
          );
          // response.data.forEach((item)=>{
          //   console.log(item)
          //   Cartctx.addItem(item)
          // })
          // Cartctx.addItem(response.data)
          console.log(response)
          // setcart(response.data)
        } catch (error) {
          console.log(error);
        }}
      
    }
    fetchCartItems();
  }, [Authctx, Cartctx]);
// console.log(cart)
  // const fetchData = useCallback(async () => {
  //   const removeemail = ctx.email.replace(/[.@]/g, "");

  //   try {
  //     const response = await fetch(
  //       `https://e-commerce-9dc0e-default-rtdb.firebaseio.com/${removeemail}.json`,
  //       {
  //         headers: { "Content-Type": "Application/json" },
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went wrong. GET DATA NOT SUCCESSFUL");
  //     }
  //     else{
  //       const data= await response.json();
  //       const cartItemArray= Object.entries(data).map(([itemId, itemdata])=>({
  //           _id:itemId,
  //           ...itemdata
  //       }))
  //       console.log(cartItemArray)
  //       ctx.addItem([ cartItemArray, 1 ]);
  //       // console.log(ctx.item)
  //       // ctx.addItem(cartItemArray)

  //     }

  //     // const data = await response.json();
  //   } catch (error) {
  //     alert(error.messages);
  //   }
  // }, []);

  return (
    <div>
      <Cart close={props.close}  />
    </div>
  );
}

export default CartItem;
