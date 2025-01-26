import React from 'react';
import bgTwo from './assets/bg2.png';
import juice from './assets/juice.png';
import cocktail from './assets/cocktail.png';
import line from './assets/line.png';
import './MenuDisplay.css';

function MenuDisplay({ menu }) {
  if (!menu) {
    return <div className='bg-black text-white text-center'>Please select a menu.</div>; 
  }

  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: `url(${bgTwo}) no-repeat center center`,
          backgroundSize: 'cover',
          height: '672px',
          width: '100%',
        }}
      >
        <div className="row h-100">
        
          <div className="col-12 col-md-1 d-flex flex-column justify-content-start align-items-start d-none d-md-flex">
            
          </div>

          {/* Center Column */}
          <div className="col-12 col-md-10 d-flex align-items-center justify-content-center position-relative center column">
            <img
              className="juice"
              style={{
                position: 'absolute',
                  top: '-25px',
                left: '-30px',
                zIndex: 1,
                height: '281px',
                width: '190px',
              }}
              src={juice}
              alt="juice"
            />
            <img
              className="cocktail"
              style={{
                position: 'absolute',
                 top: '390px',
                left: '1082px',
                zIndex: 1,
                height: '207px',
                width: '192px',
              }}
              src={cocktail}
              alt="cocktail"
            />
            <div
              style={{
                width: '100%',
                height: '416px',
                border: '1px solid #FFFFFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFFFFF',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  width: '100%',
                }}
              >
                {/* Heading Section */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    flexWrap: 'wrap',
                  }}
                >
                  <img src={line} style={{ width: '68px' }} alt="line" />
                  <span
                    style={{
                      fontSize: '50px',
                      lineHeight: '74.1px',
                      fontWeight: '600',
                      fontFamily: 'oswald',
                      color: 'rgba(255, 255, 255, 1)',
                      textShadow: '3px 4px 0px #800020',
                      whiteSpace: 'nowrap',
                    }}
                    className="heading"
                  >
                    {menu.name} 
                  </span>
                  <img src={line} style={{ width: '68px' }} alt="line" />
                </div>

                {/* Display Menu Items */}
                <div className="row d-flex justify-content-center align-items-center">
                  {menu.items.map((item, index) => (
                    <div
                      key={index}
                      className="col-12 col-md-10 d-flex flex-column align-items-start item-name-price"
                    >
                      <span
                        style={{
                          fontSize: '24px',
                          lineHeight: '38.53px',
                          fontWeight: '600',
                          fontFamily: 'Oswald',
                        }}
                      >
                       
                        {item.name} - ${item.price}
                      </span>
                      <span style={{fontFamily:'Oswald'}}> {menu.description}</span>

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-1 d-flex flex-column justify-content-end align-items-end d-none d-md-flex">
           
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuDisplay;
