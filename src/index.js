import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Weatherfunc from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <img
            src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/191:100/w_1280,c_limit/google-logo.jpg"
            alt="..."
            height="36"
          ></img>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" class="nav-link">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register" class="nav-link">
                  register
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Weather" class="nav-link">
                  weather
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Weather" element={<Weatherfunc />}></Route>
      </Routes>
    </div>
  </Router>
);

reportWebVitals();
