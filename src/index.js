import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Ikram from "./pages/Ikram/Main";
import Main from "./pages/Aqsa/Main";
import Poster from "./pages/Aqsa/Poster";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/frontend" element={<Home />} />
      <Route path="/ikram" element={<Ikram />} />
      <Route path="/aqsana" element={<Main />} />
      <Route path="/aqsana/poster" element={<Poster />} />
    </Routes>
  </Router>
);
