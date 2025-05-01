import React, { useState } from "react";
import axios from "axios";
import "./style/Signup.css";



const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Signup successful! Please login.");
      window.location.href = "/";
    } catch (err) {
      alert("Signup failed");
    }
  };
  

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
  
};

export default Signup;
