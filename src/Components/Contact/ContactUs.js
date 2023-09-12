import React from "react";
import ContactForm from "./ContactForm";
function ContactUs() {
  async function addDataHandler(data) {
    try {
      const response = await fetch(
        "https://e-commerce-9dc0e-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "Application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong. POST DATA NOT SUCCESSFUL");
      }

      // const data = await response.json();
    } catch (error) {
      alert(error.messages)
    }
  }
  return (
    <div>
      <h2 className="text-center p-2">Contact Us</h2>
      <ContactForm addData={addDataHandler} />
    </div>
  );
}

export default ContactUs;
