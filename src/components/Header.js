//Implementation of the header component that can be reused in other components
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/darklogo.jpeg';
import '../components/header.css';
import 'bootstrap'; // Import Bootstrap CSS

function Header() {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg justify-content-center" style={{margin: 0, padding: 0}}>
        <div className="header-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
