import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  if(!name || !email) return;
  setUser({name:name, email:email});
  navigate('/dashboard');

  };
  return (
    <section className="formSection">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input type="submit" name="submit" id="submit" />
        </div>
      </form>
    </section>
  );
};

export default Login;
