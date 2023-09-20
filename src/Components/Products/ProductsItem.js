import React from "react";
import { useContext} from "react";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../Store/AuthContext";

function ProductsItem(props) {
  const Cartctx = useContext(CartContext);
  const Authctx = useContext(AuthContext);
  const AddItemHandler = async (item) => {
const userToken= Authctx.Token;
if(userToken){
  const itemsToAdd= {
    id: item.id,
    imageUrl: item.imageUrl,
    name: item.title,
    amount:1,
    price: item.price
  }
  Cartctx.addItem(itemsToAdd)
  try{
    const removeemail = Authctx.email.replace(/[.@]/g, "");
    const response= await axios.post(`https://crudcrud.com/api/b1d3cc6f1ee64267ba2919167c5bf88a/${removeemail}`, itemsToAdd)
    console.log(response)
  }catch(error){
    console.log(error)
  }
}

    // Cartctx.addItem({ ...item, quantity: 1 });

    // const removeemail = Cartctx.email.replace(/[.@]/g, "");
    // console.log(removeemail);
    // try {
    //   const response = await fetch(
    //     `https://e-commerce-9dc0e-default-rtdb.firebaseio.com/${removeemail}.json`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(item),
    //       headers: { "Content-Type": "Application/json" },
    //     }
    //   );
    //   if (!response.ok) {
    //     throw new Error("Something went wrong. POST DATA NOT SUCCESSFUL");
    //   } else {
    //     const data = await response.json();
    //     console.log(data.name);
    //   }
    // } catch (error) {
    //   alert(error.messages);
    // }
  }



  const recievedProducts = props.product;
  return recievedProducts.map((item) => (
    <div
      key={item.id}
      className=" text-center d-grid gap-1 m-1 border shadow rounded-3 p-4"
      style={{ width: "18rem" }}
    >
      <Link className="text-decoration-none" to={`/Product/${item.id} `}>
        <h3>{item.title}</h3>
        <img className="card-img-top w-75 p-4 " src={item.imageUrl} alt="" />
      </Link>
      <div className="card-body d-flex ">
        <span className="p-2">
          <h4>${item.price}</h4>
        </span>
        <button
          onClick={AddItemHandler.bind(null, item)}
          className="btn btn-primary float-end mx-3 "
          style={{ width: "7rem", height: "3rem" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));
}

export default ProductsItem;
