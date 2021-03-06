import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "../src/components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import middleware from "./middleware/index";

// import LoadingBar from "react-redux-loading"

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
