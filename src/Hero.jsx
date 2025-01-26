import React from 'react';
import hero from './assets/hero.png';

function Hero() {
  return (
    <>
      <div className="container-fluid hero-container" 
           style={{
              background: `url(${hero})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit: 'cover',
              top: '98px',
              height:'311px'
          }}
      >
        <div className="row h-100">
          <div className="col-12 d-flex align-items-center justify-content-center flex-column ">
            {/* MENU Title */}
            <span 
              style={{
                fontFamily: 'oswald',
                color: '#FFFFFF',
                fontSize: '75px',
                textShadow: '3px 4px 0px #800020',
                fontWeight: '600',
                lineHeight: '111.15px',
                letterSpacing: '3%',
                textAlign: 'center',
                // Mobile responsiveness (media query style)
                '@media (max-width: 768px)': {
                  fontSize: '40px',
                  lineHeight: '59.28px'
                }
              }}
            >
              MENU
            </span><br />
            
            {/* Description */}
            <span 
              style={{
                fontFamily: 'Kelly Slab',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '21.82px',
                color: '#BBBBBB',
                textAlign: 'justify',
                // Mobile responsiveness (media query style)
                '@media (max-width: 768px)': {
                  fontSize: '16px',
                  lineHeight: '19.39px'
                }
              }}
            >
              Please take a look at our menu featuring food, drinks, and brunch. If you'd like to 
            </span>
            <span 
              style={{
                fontFamily: 'Kelly Slab',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '21.82px',
                color: '#BBBBBB',
                textAlign: 'justify',
                // Mobile responsiveness (media query style)
                '@media (max-width: 768px)': {
                  fontSize: '16px',
                  lineHeight: '19.39px'
                }
              }}
            >
              place an order, use the "Order Online" button located below the menu.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
