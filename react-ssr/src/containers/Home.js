import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../mock/index";
import axios from "axios";

const Home = (props) => {
  axios
    .get("http://localhost:10086/getNewsList")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(1111111);
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
