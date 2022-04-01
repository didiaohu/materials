import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:10086",
});

const Home = (props) => {
  instance
    .get("/api/home/list")
    .then(function (response) {
      console.log(1111111);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  const handleClick = () => {
    props.dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      <p>Home{props.state}</p>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
