import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar'; // Ensure correct capitalization
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import path
import Register from './components/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </div>
);
