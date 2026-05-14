import { useState } from "react";

import { Link } from "react-router-dom";

import API from "../services/api";

const Register = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful");

    } catch (error) {

      alert("Registration Failed");
    }
  };

  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h1
          style={{
            color:"gold",
            textAlign:"center",
          }}
        >
          LuxeJewels Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button
          className="btn"
          type="submit"
        >
          Register
        </button>

        <p style={{ textAlign:"center" }}>

          Already have an account?

          <Link
            to="/login"
            style={{
              color:"gold",
              marginLeft:"5px",
            }}
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Register;