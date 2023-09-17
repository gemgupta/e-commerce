import React from "react";
import { useState } from "react";

function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isSignup, setisSignup] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      pass: password,
    };
    props.userData(data, isSignup);
    setemail("");
    setpassword("");
  };

  return (
    <div className="container box shadow w-25 p-3 border rounded-3 mt-3">
      <form onSubmit={submitHandler}>
        <h3 className="text-center">{isSignup ? "Login here" : "Sign up "}</h3>
        <div className=" form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="ControlInput1"
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          <label htmlFor="ControlInput1" className="form-label">
            Email address
          </label>
        </div>
        <div className=" form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="ControlInput2"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
          <label htmlFor="ControlInput2" className="form-label">
            Password {"(minimum length >6)"}
          </label>
        </div>
        <button type="Submit" className="btn btn-primary d-block m-auto w-75">
          {isSignup ? "Login" : "Sign up "}
        </button>
      </form>
      <p
        className="text-center p-2 m-1"
        onClick={() => {
          setisSignup((prev) => !prev);
        }}
      >
        {isSignup
          ? "Dont have an account! Sign up"
          : "Already have an account! Sign in"}
      </p>
    </div>
  );
}

export default Login;
