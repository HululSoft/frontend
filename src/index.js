import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Ikram from "./pages/Ikram/Poster";
import Poster from "./pages/Aqsa/Poster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/frontend" element={<Home />} />
      <Route path="/frontend/ikram" element={<Ikram />} />
      <Route path="/frontend/aqsana/poster" element={<Poster />} />
    </Routes>
  </Router>
);
