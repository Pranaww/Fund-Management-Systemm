import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Official from './pages/Official';
import Manager from './pages/Manager';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/official" element={<Official />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
}

export default App;