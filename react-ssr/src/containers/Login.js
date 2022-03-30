import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      <p>Login</p>
    </div>
  );
};

export default Login;
