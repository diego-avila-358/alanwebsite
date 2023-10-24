//Implementation of the header component that can be reused in other components
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles.css';
import 'bootstrap'; // Import Bootstrap CSS
import facebookImg from '../assets/facebooklogo.png';
import instagramImg from '../assets/instagramlogo.png';

function Header() {
  return (
    <div className='header' style={{ minWidth: '1110px' }}>
      <nav
        className='navbar navbar-expand-lg justify-content-center'
        style={{ margin: 0, padding: 0 }}>
        <div
          className='header-container'
          style={{
            display: 'flex',
            justifyContent: 'center',
            minWidth: 'inherit',
          }}>
          <ul
            className='navbar-nav'
            style={{ minWidth: 'inherit', justifyContent: 'space-between' }}>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            {/*
              <li className="nav-item">
                
                <Link to="/about" className="nav-link">Gallery</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/menu" className="nav-link">Menu</Link>
              </li>
              */}
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <img
                  src={require('../assets/darklogo-nobf.png')}
                  alt='logo'
                  style={{ width: '100px', height: '100px' }}
                />
              </Link>
            </li>
            {/*
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
              */}
            <li className='social'>
              <Link
                to='https://www.facebook.com/thedreambarberlounge/'
                width='auto'
                height='auto'>
                <img src={facebookImg} alt='Logo' width='auto' height='auto' />
              </Link>
            </li>
            <li className='social'>
              <Link
                to='https://www.instagram.com/thedreambarberlounge/'
                width='auto'
                height='auto'>
                <img src={instagramImg} alt='Logo' width='auto' height='auto' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
