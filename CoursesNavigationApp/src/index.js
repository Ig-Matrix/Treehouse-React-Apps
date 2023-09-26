import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
    {/* This renders the route router that listens to the url changes and provides other router components information 
    about the current url and which component to render to make it in sync with the url */}
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </React.StrictMode>
);
