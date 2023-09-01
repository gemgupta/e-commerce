import React from "react";

function ProductsItem(props) {
  const recievedProducts = props.product;
  return  recievedProducts.map((item) => (
    <div key={item.id} className="card text-center" style={{ width: "15rem" }}>
      <h3>{item.title}</h3>
      <img className="card-img-top border-bottom" src={item.imageUrl} alt="" />
      <div className="card-body d-flex">
        <span className="p-2"><h4>${item.price}</h4></span>
        <button className="btn btn-primary float-end mx-3" style={{width:"7rem", height: '3rem'}}>Add to Cart</button>
      </div>
    </div>
  ));
}

export default ProductsItem;
