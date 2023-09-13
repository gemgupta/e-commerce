import React from "react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";
function ProductsItem(props) {
  const Cartctx = useContext(CartContext);
  const AddItemHandler = (item) => {
   

    Cartctx.addItem({ ...item, quantity: 1 });
  };
  const recievedProducts = props.product;
  return recievedProducts.map((item) => (
    <div
      key={item.id}
      className=" text-center d-grid gap-1 border shadow rounded-3 p-4"
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
