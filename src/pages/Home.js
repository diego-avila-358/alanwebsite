import React from 'react';
import 'bootstrap'; // Import Bootstrap CSS
import Header from '../components/Header';
import Footer from '../components/Footer';
import video from '../assets/background.mov';
import '../components/styles.css';

function Home() {
  return (
    <div
      className='home-page'
      style={{
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '1110px',
      }}>
      <Header />

      <div
        className='text-white position-relative overflow-hidden dark-filter-image'
        style={{ top: -150, zIndex: 1, minWidth: '1110px' }}>
        <video
          src={video}
          alt='Background'
          autoPlay
          loop
          muted
          className='header-background'
          style={{
            width: '100%',
            height: 'auto',
            position: 'relative',
          }}></video>
        <div
          className='dark-overlay'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            height: '100%',
          }}></div>
      </div>

      <div
        className='intro-container'
        style={{
          position: 'relative',
          height: '300px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          minWidth: '1110px',
        }}>
        <div
          className='faded-line'
          style={{
            marginTop: '10px',
            marginBottom: '40px',
            backgroundColor: 'rgb(204,178, 135)',
            height: '1px',
            width: '80%',
            minWidth: '',
          }}></div>

        <div
          className='intro-text'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            minWidth: 'inherit',
            fontFamily: 'Bisdak',
          }}>
          <div
            className=''
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <p
              style={{
                fontSize: 'var(--header-font-size)',
                color: 'rgb(204,178, 135)',
              }}>
              Hours
            </p>
            <p style={{ fontSize: 'var(--regular-font-size)' }}>
              Monday - Saturday
            </p>
            <p style={{ fontSize: 'var(--regular-font-size)' }}>
              8:00 AM - 8:00PM
            </p>
            <p style={{ fontSize: 'var(--regular-font-size)' }}>Sunday</p>
            <p style={{ fontSize: 'var(--regular-font-size)' }}>
              11:00 AM - 4:00 PM
            </p>
          </div>
          <div
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <p
              style={{
                fontSize: 'var(--header-font-size)',
                color: 'rgb(204,178, 135)',
              }}>
              Contact Us
            </p>
            <a
              href='tel:(956)3131784'
              style={{
                fontSize: 'var(--regular-font-size)',
                textDecoration: 'none',
                color: 'white',
                marginBottom: '1rem',
              }}>
              (956) 313-1784
            </a>
            <a
              href='mailto:dreambarbershop01@gmail.com'
              style={{
                fontSize: 'var(--regular-font-size)',
                textDecoration: 'none',
                color: 'white',
              }}>
              dreambarbershop01@gmail.com
            </a>
          </div>
          <div
            style={{
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <p
              style={{
                fontSize: 'var(--header-font-size)',
                color: 'rgb(204,178, 135)',
              }}>
              Location
            </p>
            <p style={{ fontSize: 'var(--regular-font-size)' }}>
              1800 N 23rd St, Suite 40 McAllen, TX
            </p>
          </div>
        </div>
      </div>

      <div
        className='services d-flex flex-column align-items-center justify-content-around'
        style={{
          backgroundColor: 'rgb(204,178, 135)',
          minWidth: 'inherit',
          height: '500px',
        }}>
        <div
          className='title'
          style={{ display: 'flex', fontFamily: 'Bisdak', color: 'white' }}>
          <p>Services</p>
        </div>
        <div
          className='d-flex card'
          style={{
            height: 'auto',
            width: '95%',
            backgroundColor: 'black',
            maxWidth: '1000px',
          }}>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Regular Cut</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                20
              </p>
            </div>
          </div>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Any Style Fade</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                25
              </p>
            </div>
          </div>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Beard Trim / Shape</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                10
              </p>
            </div>
          </div>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <p style={{ paddingLeft: '10px' }}>Palomo Special</p>
            <p style={{ fontSize: '13px' }}>
              (Fade, Beard, Hot Towel, Eyebrows, Shampoo)*
            </p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                40
              </p>
            </div>
          </div>
        </div>

        <div
          className='title'
          style={{ display: 'flex', fontFamily: 'Bisdak', color: 'white' }}>
          <p>Extra's</p>
        </div>

        <div
          className='d-flex card'
          style={{
            height: 'auto',
            width: '95%',
            backgroundColor: 'black',
            maxWidth: '1000px',
          }}>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Eyebrows</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                5
              </p>
            </div>
          </div>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Shampoo</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                5
              </p>
            </div>
          </div>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Face/Neck Massage</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                5
              </p>
            </div>
          </div>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Hot Towel</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                5
              </p>
            </div>
          </div>
          <div
            className='service-item'
            style={{
              display: 'flex',
              fontFamily: 'Bisdak',
              color: 'white',
              justifyContent: 'space-between',
            }}>
            <p style={{ paddingLeft: '10px' }}>Face Mask</p>
            <div className='row'>
              <p
                className='col'
                style={{
                  fontFamily: 'sans-serif',
                  marginRight: 0,
                  paddingRight: '3px',
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}>
                $
              </p>
              <p
                className='col'
                style={{ marginLeft: 0, paddingLeft: 0, paddingRight: '20px' }}>
                5
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
