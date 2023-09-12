import React from "react";
import { useState } from "react";
function ContactForm(props) {
  const [enteredName, setenteredName] = useState("");
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredContact, setenteredContact] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: enteredName,
      email: enteredEmail,
      contact: enteredContact,
    };

    props.addData(data);
   setenteredName('')
   setenteredEmail('')
   setenteredContact('')
  };
  return (
    <form
      onSubmit={submitHandler}
      className="container w-50 border border-3 shadow rounded-3 p-3 mt-3"
    >
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          onChange={(e) => {
            setenteredName(e.target.value);
          }}
          value={enteredName}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          onChange={(e) => {
            setenteredEmail(e.target.value);
          }}
          value={enteredEmail}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contact" className="form-label">
          Contact Number
        </label>
        <input
          type="number"
          className="form-control"
          id="contact"
          required
          onChange={(e) => {
            setenteredContact(e.target.value);
          }}
          value={enteredContact}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
