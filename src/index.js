import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let initState = {
  candles: []
};

const reducer = (state = initState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_ALL":
      return {
        ...state,
        candles: payload
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
