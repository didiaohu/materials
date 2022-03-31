import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { getClientStore } from "../store";

const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
  );
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
