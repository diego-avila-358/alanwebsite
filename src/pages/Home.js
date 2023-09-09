import React from 'react';
import { Link } from 'react-router-dom';
import '../components/home.css';
import 'bootstrap'; // Import Bootstrap CSS
import Header from "../components/Header";
import logoImage from '../assets/darklogo.jpeg';

function Home() {
  return (
    <div className='home-page'>
      <Header />
      <div className="bg-dark text-white position-relative overflow-hidden dark-filter-image">
          <img src={logoImage} alt="Background" className="header-background img-fluid" />
          <div className="dark-overlay"></div>
          <div className="position-absolute top-50 start-50 translate-middle text-center image-text">
          </div>
      </div>

      <div className='intro-container'>
        <div className='faded-line'></div>

        <div className='intro-text'>
          <h1 className='intro-header'></h1>
        </div>

      </div>

    </div>
  );
}

export default Home;
