// src/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    // Replace with your API endpoint
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center gap-[10px] text-[18px] w-[90%]"
    >
      <input
        placeholder="Name"
        type="text"
        name="name"
        required
        className="-bg-gray w-full p-3 rounded"
      />
      <input
        placeholder="Email Address"
        type="email"
        name="email"
        required
        className="-bg-gray w-full p-3 rounded mb-2"
      />
      <textarea
        placeholder="Message"
        name="message"
        required
        className="-bg-gray w-full p-3 rounded mb-2 h-[200px]"
      />
      <button
        type="submit"
        className="-bg-blue -text-white p-3 rounded-lg w-full hover:opacity-80 transition-all duration-500"
      >
        {status}
      </button>
    </form>
  );
};

export default ContactForm;
