import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './assets/bg.png';
import axios from 'axios';
import MenuDisplay from './MenuDisplay';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);  
  const navigate = useNavigate();

  // Fetch menu items from API
  useEffect(() => {
    axios
      .get('https://menubackend-1.onrender.com/menus') 
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  
  const handleMenuSelection = (menu) => {
    setSelectedMenu(menu);  
  };

  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          background: `url(${bg})`,
          width: '100%',
          height: '79px',
        }}
      >
        
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="styled-button"
            style={{
              fontSize: '16px',
              border: '0.5px solid #0796EF',
              width: '114.25px',
              height: '49.98px',
              fontWeight: '600',
              lineHeight: '23.73px',
              fontFamily: 'oswald',
              margin: '5px',
              textShadow: '0.97px 1.3px #800020',
              color: '#FFFFFF',
              background: item.active ? '#0796EF' : '#000000',
              letterSpacing: '0.03em',
            }}
            onClick={() => handleMenuSelection(item)} 
          >
            {item.name}
          </button>
        ))}

      
        <button
          className="styled-button"
          style={{
            fontSize: '16px',
            border: '0.5px solid #0796EF',
            width: '114.25px',
            height: '49.98px',
            fontWeight: '600',
            lineHeight: '23.73px',
            fontFamily: 'oswald',
            margin: '5px',
            textShadow: '0.97px 1.3px #800020',
            color: '#FFFFFF',
            background: '#000000',
            letterSpacing: '0.03em',
          }}
          onClick={() => navigate('/add-menu')} 
        >
          ADD
        </button>
      </div>
      
    
      <MenuDisplay menu={selectedMenu} />
    </>
  );
}

export default Menu;
