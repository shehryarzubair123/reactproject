import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Website from "./Website";
import {BrowserRouter} from "react-router-dom";



ReactDOM.render(
    <>
    <BrowserRouter>
     <Website/>
    </BrowserRouter>
  
    </>
    ,document.getElementById("root")
);