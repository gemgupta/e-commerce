import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Header from "./Header";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
function Nave(props) {
  const Cartctx = useContext(CartContext);
  let quantity = 0;
  Cartctx.item.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <>  
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Nav className="text-light" style={{ width: "25%" }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
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
