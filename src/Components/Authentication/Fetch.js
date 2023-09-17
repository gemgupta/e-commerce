import React from "react";
import Login from "./Login";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { useNavigate } from "react-router-dom";

function Fetch() {
  const ctx = useContext(CartContext);
  const navigate = useNavigate()
  async function getData(data, signup) {
    if (!signup) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlQp2epYuVtpZq-y2Yc1cWI1w4iJmgMg8",
          {
            method: "POST",
            body: JSON.stringify({
              email: data.email,
              password: data.pass,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.error.message);
        } else {
          // const tokenData = await response.json();
          // ctx.Login(tokenData.idToken)
        }
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlQp2epYuVtpZq-y2Yc1cWI1w4iJmgMg8",
          {
            method: "POST",
            body: JSON.stringify({
              email: data.email,
              password: data.pass,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          const errorMessage = await response.json();
          throw new Error(errorMessage.error.message);
        } else {
          const tokenData = await response.json();
          ctx.Login(tokenData.idToken);
          console.log("Login success");
          navigate('/')
        }
      } catch (error) {
        alert(error);
      }
    }
  }
  return (
    <div>
      <Login userData={getData} />
    </div>
  );
}

export default Fetch;
