import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToasify.css';
// import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);

reportWebVitals();
