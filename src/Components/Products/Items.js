import React from "react";
import ProductsItem from "./ProductsItem";
import productsArr from "./Products";
function Items() {
  return (
    <div className="Container d-lg-flex p-2 justify-content-evenly m-5 ">
      <ProductsItem product={productsArr} />
    </div>
  );
}
export default Items;
