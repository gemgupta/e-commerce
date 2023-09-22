import React from "react";
import ProductsItem from "./ProductsItem";
import productsArr from "./Products";
import Header from "../Nav/Header";
function Items() {
  return (
    <>
    <Header/>
    <div className="Container d-lg-flex p-2 justify-content-evenly m-5 ">
      <ProductsItem product={productsArr} />
    </div>
    </>
  );
}
export default Items;
