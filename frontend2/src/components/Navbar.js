import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/official">Official</Link>
        <Link to="/manager">Manager</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;