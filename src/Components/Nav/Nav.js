import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Header from "./Header";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { Link} from "react-router-dom";
import AuthContext from "../Store/AuthContext";
function Nave(props) {
  const Cartctx = useContext(CartContext);
  const Authctx = useContext(AuthContext);

  let quantity = 0;
  Cartctx.item.forEach((item) => {
    quantity = quantity + Number(item.amount);
  });
  return (
    <>
      <Navbar
        bg="dark"
        className="d-flex position-sticky z-2 top-0"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
          <Nav
            className="justify-content-between fw-bold"
            style={{ width: "25%" }}
          >
            <Link className="text-decoration-none text-light" to="/home">
              Home
            </Link>
            <Link className="text-decoration-none text-light" to="/">
              Store
            </Link>
            <Link className="text-decoration-none text-light" to="/about">
              About
            </Link>
            <Link className="text-decoration-none text-light" to="/contactUs">
              Contact
            </Link>
          </Nav>
          {Authctx.isLoggedIn && (
            <button
              type="button"
              onClick={props.Open}
              className="btn btn-primary"
            >
              Cart <span className="badge text-bg-secondary">{quantity}</span>
            </button>
          )}
          {Authctx.isLoggedIn && (
            <button type="button" className="btn btn-danger" onClick={Authctx.Logout}>
              Logout
            </button>
          )}
          {!Authctx.isLoggedIn && (
            <Link className="btn btn-success" to="/Login">
            Login
          </Link>
          )}
        </Container>
      </Navbar>
      <Header />
    </>
  );
}

export default Nave;
