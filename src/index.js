import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root
);
