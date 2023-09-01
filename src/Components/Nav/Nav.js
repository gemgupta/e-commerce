import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Header from "./Header";
function Nave() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand >E-Commerce</Navbar.Brand>
        <Nav className="text-light" style={{ width: "25%" }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#store">Store</Nav.Link>
          <Nav.Link href="#about">About Us</Nav.Link>
        </Nav>
        <div>
          <Button
            variant="link"
            className="border-1 border-white text-decoration-none"
          >
            Cart
          </Button>
          <span className="text-light mx-1">0</span>
        </div>
      </Container>
    </Navbar>
    <Header/>
    </>
  );
}

export default Nave;
