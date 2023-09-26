import React from "react";
import { useState } from "react";  
import axios from "axios";

const Form = () => {
  const [state, setState] = useState({
    email: "",
    message: "",
    file: null
  });

  function handleChange(e) {
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();

    for (let [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    // Use fetch or axios to submit the form
    await axios
      .post("{Formeezy-Endpoint}", formData)
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      })
      .catch((e) => {
        window.location.href = e.response.data.redirect;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
        value={state.email}
        required
      />
      <textarea
        name="message"
        placeholder="Enter message"
        onChange={handleChange}
        value={state.message}
        required
      />
      <input type="file" name="file" onChange={handleChange} />
      <input
        name="bot-field"
        type="text"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button type="submit">Send</button>
    </form>
  );
}

const Contact = () => {
  return (
    <div>
      <h1>My Contact Page</h1>
      <Form/>
    </div>
  );
};

export default Contact;