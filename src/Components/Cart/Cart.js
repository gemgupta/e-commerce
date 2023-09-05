import React from "react";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
function Cart(props) {
  const Cartctx = useContext(CartContext);
  const removehandler = (id) => {
    Cartctx.removeItem(id);
  };
  return (
    <Container
      className=" border border-dark rounded-1 d-block position-fixed bg-danger-subtle"
      style={{ minHeight: "90vh", right: 0, top: "55px", width: "40rem" }}
    >
      <button
        type="button"
        className="btn btn-danger position-absolute end-0 border-0"
        onClick={props.close}
      >
        X
      </button>
      <h2 className="text-center border-dark border-bottom p-2 fw-bold">
        Cart
      </h2>
      <section className="row text-center   row-cols-4 fs-3 fw-bold">
        <span className="border-dark border-bottom mx-4">Item</span>
        <span className="border-dark border-bottom mx-4">Price</span>
        <span className="border-dark border-bottom mx-4">Quantity</span>
      </section>
      {/* {console.log(Cartctx.item.imageUrl)} */}
      {Cartctx.item.map((item) => (
        <section key={item.id} className="row text-center   row-cols-4">
          <span className="border-dark d-flex  border-bottom mx-4">
            <img
              className="w-75 h-75 d-inline-block  m-auto"
              src={item.imageUrl}
              alt=""
            />
            <span className="fw-bold  text-center  d-inline-block w-75 m-auto">
              {item.title}
            </span>
          </span>
          <div className="border-dark border-bottom mx-4 d-flex  ">
            <span className=" fw-bold d-inline-block w-75 m-auto ">
              ${item.price}
            </span>
          </div>
          <span className="border-dark border-bottom mx-4 d-flex">
            <input
              className="w-25 h-25 m-auto"
              type="number"
              value={item.quantity}
              readOnly
            />
            <button
              className="btn btn-danger d-inline-block w-75 m-auto mx-2 p-0"
              style={{ height: "2rem" }}
              onClick={removehandler.bind(null, item.id)}
            >
              Remove
            </button>
          </span>
        </section>
      ))}
      <h2 className=" position-relative mt-2 border border-black rounded-4 text-center">
        Total Cart Value{" "}
        <span className="text-success"> ${Cartctx.totalAmount} </span>
      </h2>
    </Container>
  );
}

export default Cart;
