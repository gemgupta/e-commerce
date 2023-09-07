import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Header from "./Header";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { NavLink } from "react-router-dom";
function Nave(props) {
  const Cartctx = useContext(CartContext);
  let quantity = 0;
  Cartctx.item.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <>  
      <Navbar bg="dark" className="d-flex position-sticky top-0" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Nav className="text-light" style={{ width: "25%" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="#">Store</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </Nav>
          <div>
            <Button
              className="border-1 border-white mx-1 rounded-3"
              onClick={props.Open}
            >
              Cart
            </Button>
            <span className="text-light mx-1">{quantity}</span>
          </div>
        </Container>
      </Navbar>
      <Header />
    </>
  );
}

export default Nave;
