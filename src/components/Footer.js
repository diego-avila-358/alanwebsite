import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap'; // Import Bootstrap CSS
import facebookImg from '../assets/facebooklogo.png';
import instagramImg from '../assets/instagramlogo.png';


function Footer() {
  return (
    <div className='footer container-fluid' style={{minWidth: 'inherit', height: '330px', backgroundColor: 'black', paddingTop: '20px', position: 'relative'}}>
      <div className='footer-columns row justify-content-between'>
        <div className='footer-socials col d-flex flex-column'>
          <div className='col d-flex justify-content-center'>
            <Link to="/" className="nav-link">
              <img src={require('../assets/darklogo-nobf.png')} alt="logo" style={{width: '100px', height: '100px'}}/>
            </Link>
          </div>
          <div className='d-flex col justify-content-center'>
            <Link to="www.facebook.com/thedreambarberlounge" width="auto" height="auto"> 
              <img className='p-2' src={facebookImg} alt="Logo" width="auto" height="auto" />
            </Link>
            <Link to="https://www.instagram.com/thedreambarberlounge/" width="auto" height="auto"> 
              <img className='p-2' src={instagramImg} alt="Logo" width="auto" height="auto" />
            </Link>
          </div>
          <div style={{fontFamily: 'Bisdak', display: 'flex', flexDirection: 'column'}}>
            <a href="tel:(956)3131784" style={{fontSize: 'var(--regular-font-size)',  textDecoration: 'none', color: 'white', display: 'flex', marginBottom: '1em', justifyContent: 'center'}}>(956) 313-1784</a>
            <a href="mailto:dreambarbershop01@gmail.com" style={{fontSize: 'var(--regular-font-size)', textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center'}}>dreambarbershop01@gmail.com</a>
          </div>
        </div>
        <div className='footer-hours col d-flex flex-column justify-content-center align-items-center' style={{fontFamily: 'Bisdak', color: 'white'}}>
          <p style={{fontSize: 'var(--header-font-size)', color: 'white'}}>Hours</p>
          <p style={{fontSize: 'var(--regular-font-size)'}}>Monday - Saturday</p>
          <p style={{fontSize: 'var(--regular-font-size)'}}>8:00 AM - 8:00PM</p>
          <p style={{fontSize: 'var(--regular-font-size)'}}>Sunday</p>
          <p style={{fontSize: 'var(--regular-font-size)'}}>11:00 AM - 4:00 PM</p>
        </div>
        <div className='footer-location col d-flex flex-column align-items-center' style={{fontFamily: 'Bisdak', color: 'white'}}>
          <p style={{fontSize: '20px'}}>Location</p>
          <p style={{fontSize: '15px'}}>1800 N 23rd St, Suite 40 McAllen, TX</p>  
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='faded-line' 
            style={{
              display: 'flex',
              marginTop: '50px', 
              marginBottom: '40px', 
              backgroundColor: 'rgb(204,178, 135)', 
              height: '1px', 
              width: '95%',}}>
        </div>
      </div>
      <div className='copyright' style={{fontFamily: 'Bisdak', color: 'white', position: 'absolute', fontSize: '75%', bottom: '0px'}}>
        <p>@ 2023 The Dream Barber Lounge</p>
      </div>
    </div>
  );
}

export default Footer;
