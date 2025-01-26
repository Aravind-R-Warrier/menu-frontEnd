import React, { useState } from 'react';
import logo from './assets/Logo.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative d-flex align-items-end justify-content-end" 
      style={{ height: '100px', background: '#121618', position: 'relative' }}>

      {/* Logo */}
      <img
        className="absolute"
        style={{
          width: '86px',
          height: '76px',
          position: 'absolute',
          top: '55px',
          left: '168px',
          transform: 'translateX(-50%)',
          zIndex: 2,
          margin: 0,
          padding: 0,
        }}
        src={logo}
        alt="Logo"
      />

      {/* Title */}
      <div className="absolute d-none d-sm-block" 
        style={{
          fontFamily: "Oswald",
          fontSize: '35px',
          fontWeight: '400',
          lineHeight: '40px',
          letterSpacing: '0.03em',
          textAlign: 'left',
          padding: 0,
          margin: 0,
          position: 'absolute',
          top: '58px',
          left: '290px',
          transform: 'translateX(-50%)',
          zIndex: 2,
          width: '154px',
          height: '52px',
        }}>
        <span style={{ color: "#0796EF" }}>DEEP</span><span style={{ color: '#FFFFFF' }}>NET</span><br />
        <span style={{ color: '#857878' }}>SOFT</span>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="d-block d-sm-none d-flex justify-content-end" 
        style={{ position: 'absolute', top: '10px', right: '20px', zIndex: 3 }}>
        <button 
          onClick={toggleMenu} 
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '30px' }}>
          &#9776; 
        </button>
      </div>

      {/* Navbar Items (for large screens) */}
      <ul className={`nav justify-content-end ${isMenuOpen ? 'd-block' : 'd-none'} d-sm-flex`} style={{ zIndex: 1 }}>
        <li className="nav-item">
          <a className="nav-link text-white" style={{
            fontFamily: 'Oswald',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '23.71px',
            letterSpacing: '0.03em',
            textAlign: 'left',
          }} href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:'#0796EF'}} href="#">MENU</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">MAKE A RESERVATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">CONTACT US</a>
        </li>
      </ul>

      {/* Mobile Navbar */}
      <ul className={`nav flex-column d-block d-sm-none ${isMenuOpen ? 'd-block' : 'd-none'}`} 
        style={{ position: 'absolute', top: '60px', right: '10px', zIndex: 2, backgroundColor: '#121618', padding: '10px' }}>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:'#0796EF'}} href="#">MENU</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">MAKE A RESERVATION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">CONTACT US</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
