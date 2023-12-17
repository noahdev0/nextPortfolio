import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillMoonStarsFill } from "react-icons/bs";


const Form = ({ darkMode }) => {
  const [state, setState] = useState({
    email: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    if (e.target.files) {
      setState({ ...state, [e.target.name]: e.target.files[0] });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    try {
      const { data } = await axios.post("/contact", formData);
      const { redirect } = data;
      window.location.href = redirect;
    } catch (error) {
      window.location.href = error.response.data.redirect;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`max-w-md mx-auto ${darkMode ? "dark" : ""}`}>
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
        value={state.email}
        required
        className={`border border-gray-300 rounded-md px-4 py-2 mb-2 w-full ${
          darkMode ? "dark:bg-gray-800 dark:text-white" : ""
        }`}
      />
      <textarea
        name="message"
        placeholder="Enter message"
        onChange={handleChange}
        value={state.message}
        required
        className={`border border-gray-300 rounded-md px-4 py-2 mb-2 w-full ${
          darkMode ? "dark:bg-gray-800 dark:text-white" : ""
        }`}
      />

      <input
        name="bot-field"
        type="text"
        onChange={handleChange}
        value={state["bot-field"]}
        className="hidden"
      />
      <button
        type="submit"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
          darkMode ? "dark:bg-gray-800" : ""
        }`}>
        Send
      </button>
    </form>
  );
};
const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`dark:bg-slate-800 h-screen flex justify-around items-center flex-col ${
        darkMode ? "dark" : ""
      }`}>
      <button
        className=" dark:text-green-300 text-5xl"
        onClick={toggleDarkMode}>
        <BsFillMoonStarsFill />
      </button>
      <h1 className="text-4xl dark:text-yellow-50 ">My Contact Page</h1>
      <div className="flex justify-around items-center">
        <Form darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Contact;
