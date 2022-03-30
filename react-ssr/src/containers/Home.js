import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      <p>Home</p>
    </div>
  );
};

export default Home;
