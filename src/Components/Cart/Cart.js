import React from "react";
import { useContext, useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import CartContext from "../Store/CartContext";
import AuthContext from "../Store/AuthContext";
function Cart(props) {
  const Cartctx = useContext(CartContext);

  const authctx = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function fetchCartItems() {
      const userToken = authctx.Token;
      if (userToken) {
        try {
          const userModifiedEmail = authctx.email.replace(/[.@]/g, "");
          const URL = `https://crudcrud.com/api/1c7b12e2bfde4ff2af994deac138c7cf`;
          const response = await axios.get(`${URL}/${userModifiedEmail}`);

          const cart = response.data;
          const totalAmount = cart.reduce(
            (total, item) => total + item.price,
            0
          );
          Cartctx.setTotalAmount(totalAmount);

          setCartItems(cart);
          Cartctx.getlength(cartItems.length);
        } catch (error) {
          console.error("Error fetching cart items:", error.response.data);
        }
      }
    }

    fetchCartItems();
  }, [Cartctx, authctx]);
  const closeAlertHandler = () => {
    setShowAlert(false); // Close the alert
  };
  const removehandler = async (id) => {
    const existingItem = cartItems.find((item) => item._id === id);

    if (existingItem) {
      // Remove from local cart
      const updatedCart = cartItems.filter((item) => item._id !== id);

      Cartctx.setTotalAmount((totalAmount) => totalAmount - existingItem.price);
      setCartItems(updatedCart);

      // Remove from remote data
      try {
        const userModifiedEmail = authctx.email.replace(/[.@]/g, "");
        await axios.delete(
          `https://crudcrud.com/api/1c7b12e2bfde4ff2af994deac138c7cf/${userModifiedEmail}/${id}`
        );
      } catch (error) {
        console.error(
          "Error deleting item from remote data:",
          error.response.data
        );
      }
    }
  };
  return (
    <div className="modal d-block " style={{ backgroundColor: "#36363780" }}>
      <div className="modal-content rounded-4 shadow modal-dialog ">
        <div className="modal-content">
          <div className="modal-header border-0 ">
            <h2 className=" p-2 fw-bold">Cart</h2>
            <button
              type="button"
              className="btn-close"
              onClick={props.close}
              aria-label="Close"
            ></button>
          </div>
          <section className=" text-center d-flex  row-cols-4  fw-bold">
            <span className="border-dark border-bottom mx-4">Item</span>
            <span className="border-dark border-bottom mx-4">Price</span>
            <span className="border-dark border-bottom mx-4">Quantity</span>
          </section>
          {showAlert && (
            <Alert variant="warning" onClose={closeAlertHandler} dismissible>
              Item already in the Cart
            </Alert>
          )}
          <div className="modal-body py-0">
            {cartItems.map((item) => (
              <section
                key={item._id}
                className=" d-flex text-center   row-cols-4"
              >
                <span className="border-dark d-flex  border-bottom mx-4">
                  <img
                    className="w-50 h-50 d-inline-block img-fluid  m-auto"
                    src={item.imageUrl}
                    alt=""
                  />
                  <span className=" text-center  d-inline-block w-50 m-auto">
                    {item.name}
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
                    value={item.amount}
                    readOnly
                  />
                  <button
                    className="btn btn-danger d-inline-block w-75 m-auto mx-2 p-0"
                    style={{ height: "2rem" }}
                    onClick={removehandler.bind(null, item._id)}
                  >
                    Remove
                  </button>
                </span>
              </section>
            ))}

            <h2 className=" position-relative mt-2 border border-black rounded-4 text-center p-2">
              Total Cart Value
              <span className="text-success"> ${Cartctx.totalAmount} </span>
            </h2>
            <div className="d-flex justify-content-evenly p-3">
              <button onClick={props.close} className="btn btn-danger w-50 m-1">
                Close
              </button>
              <button className="btn btn-success w-50 m-1">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
