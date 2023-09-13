import React from "react";
import { useParams } from "react-router";
import productsArr from "../Products/Products";
import star from "./star.png";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

function ProductDes() {
  const param = useParams();
  const Cartctx = useContext(CartContext);
  const AddItemHandler = (item) => {
   

    Cartctx.addItem({ ...item, quantity: 1 });
  };

  let product;
  for (let i = 0; i < productsArr.length; i++) {
    if (Number(param.id) === productsArr[i].id) {
      product = productsArr[i];
    }
  }

  return (
    <div
      className="card mb-3 m-auto mt-5 border shadow rounded-2 pt-3"
      style={{ maxWidth: "540px", height: "30rem" }}
    >
      <div className="row g-1">
        <div className="col-md-4 p-3">
          <img
            src={product.imageUrl}
            className="img-fluid rounded-start"
            alt="..."
          />
          <button
          onClick={AddItemHandler.bind(null, product)}
          className="btn btn-warning mt-5 "
          style={{ width: "7rem", height: "3rem" }}
        >
          Add to Cart
        </button>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title text-center">{product.title}</h3>
            <p className="card-text text-center">{product.description}</p>
           
              <h3 className="text-center">Ratings and Reviews</h3>
              <div className="d-flex">

             
              <span className="badge d-flex align-items-center justify-content-center w-25  text-success-emphasis bg-success border  rounded-pill">
                <span className="fw-bolder p-2 text-light">
                {product.rating.rate}
                </span>
                
                <img
                  className="rounded-circle me-1"
                  width="12"
                  height="20"
                  src={star}
                  alt=""
                />
                
              </span>
          
              <span className="m-auto">{product.rating.count} rating and {product.rating.count -10} reviews </span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDes;
