import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const counter = document.querySelector(".conter-number");
async function updateCounter() {
  let response = await fetch("https://w6rrcxzhbnqngjynbi3ewkq25a0wtwnt.lambda-url.us-east-1.on.aws/");
  let data await response.json();
  counter.innerHTML = ` Views: ${data}`;
};


reportWebVitals();
