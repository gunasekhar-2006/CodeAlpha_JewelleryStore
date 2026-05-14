import { useState } from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import API from "../services/api";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      navigate("/");

    } catch (error) {

      alert("Login Failed");
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
          LuxeJewels Login
        </h1>

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
          Login
        </button>

        <p style={{ textAlign:"center" }}>

          New User?

          <Link
            to="/register"
            style={{
              color:"gold",
              marginLeft:"5px",
            }}
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default Login;