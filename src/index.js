import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import "./assets/fonts/titles.ttf";
import "./assets/fonts/Pixelated.woff";
import "./assets/fonts/Pixelated.woff2";

import App from "./App";
import Privacy from "./Privacy";
import Terms from "./Terms";
import NotFound from "./NotFound";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<App />} />
        <Route path="/discord" element={() => {
          window.location.href = "https://discord.gg/jRUWbXhCYN";
          return null;
        }} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
