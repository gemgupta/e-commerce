import React from "react";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
function ProductsItem(props) {
  const Cartctx = useContext(CartContext);
  const AddItemHandler = ( item) => {
    // event.preventDefault();

    Cartctx.addItem({ ...item, quantity: 1 });
  };
  const recievedProducts = props.product;
  return recievedProducts.map((item) => (
    <div key={item.id}  className=" text-center d-grid gap-1 border border-black" style={{ width: "15rem"  }}>
      <h3>{item.title}</h3>
      <img className="card-img-top border-bottom" src={item.imageUrl} alt="" />
      <div className="card-body d-flex">
        <span className="p-2">
          <h4>${item.price}</h4>
        </span> 
        <button
          onClick={AddItemHandler.bind(null, item)}
          className="btn btn-primary float-end mx-3"
          style={{ width: "7rem", height: "3rem" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));
}

export default ProductsItem;
