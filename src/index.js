import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Ikram from './pages/Ikram/Main';
import Main from './pages/Aqsa/Main';
import Poster from './pages/Aqsa/Poster';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ikram" element={<Ikram/>}/>
        <Route exact path="/aqsana" element={<Main/>}/>
        <Route exact path="/aqsana/poster" element={<Poster/>}/>
        <div>Hello</div>
      </Routes>
    </Router>
  </React.StrictMode>
);