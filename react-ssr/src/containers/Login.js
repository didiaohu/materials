import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Login = (props) => {
  const handleClick = () => {
    props.dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      <p>Login {props.state}</p>
      <button onClick={handleClick}>DEC</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// TODO: redux、axios、部署
