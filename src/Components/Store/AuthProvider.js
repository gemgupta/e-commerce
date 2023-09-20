import React from "react";
import { useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router";
function AuthProvider(props) {
  const localToken = localStorage.getItem("token");

  const [Token, setToken] = useState(localToken);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const userIsLoggedIn = !!Token;

  const LoginHandler = (Token, email) => {
    setToken(Token);
    localStorage.setItem("token", Token);
    setUserEmail(email);
  };
  const LogoutHandler = () => {
    setToken(null);
    navigate("/Login");
    localStorage.removeItem("token");
  };
  const AuthContext1 = {
    Token: Token,
    Login: LoginHandler,
    Logout: LogoutHandler,
    isLoggedIn: userIsLoggedIn,
    email: userEmail,
  };
  return (
    <AuthContext.Provider value={AuthContext1}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
