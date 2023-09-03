import React from "react";
import { Container } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];
function Cart(props) {
  return (
    <Container
      className=" border border-dark rounded-1 d-block position-fixed bg-danger-subtle"
      style={{ minHeight: "90vh", right: 0, top: "55px", width: "40rem" }}
    >
      <button
        type="button"
        className="btn btn-danger position-absolute end-0"
        onClick={props.close}
      >
        x
      </button>
      <h2 className="text-center border-dark border-bottom p-2 fw-bold">
        Cart
      </h2>
      <section className="row text-center   row-cols-4 fs-3 fw-bold">
        <span className="border-dark border-bottom mx-4">Item</span>
        <span className="border-dark border-bottom mx-4">Price</span>
        <span className="border-dark border-bottom mx-4">Quantity</span>
      </section>
      {cartElements.map((item) => (
        <section key={item.imageUrl} className="row text-center   row-cols-4">
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
              className="btn btn-danger d-inline-block w-75 m-auto mx-2"
              style={{ height: "2rem" }}
            >
              Remove
            </button>
          </span>
        </section>
      ))}
    </Container>
  );
}

export default Cart;
