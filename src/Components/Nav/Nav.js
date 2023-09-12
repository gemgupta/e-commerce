import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Header from "./Header";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { Link } from "react-router-dom";
function Nave(props) {
  const Cartctx = useContext(CartContext);
  let quantity = 0;
  Cartctx.item.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <>
      <Navbar
        bg="dark"
        className="d-flex position-sticky top-0"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Nav
            className="justify-content-between fw-bold"
            style={{ width: "25%" }}
          >
            <Link className="text-decoration-none text-light"  to="/home">
              Home
            </Link>
            <Link className="text-decoration-none text-light"  to="/">
              Store
            </Link>
            <Link className="text-decoration-none text-light" to="/about">
              About
            </Link>
            <Link className="text-decoration-none text-light" to="/contactUs">
              Contact
            </Link>
          </Nav>

          <button type="button" onClick={props.Open} className="btn btn-primary">
            Cart <span className="badge text-bg-secondary">{quantity}</span>
          </button>
        </Container>
      </Navbar>
      <Header />
    </>
  );
}

export default Nave;
