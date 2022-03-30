import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
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
