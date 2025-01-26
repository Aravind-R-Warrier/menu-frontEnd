import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './assets/bg.png';
import axios from 'axios';
import MenuDisplay from './MenuDisplay';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);  // New state to store selected menu
  const navigate = useNavigate();

  // Fetch menu items from API
  useEffect(() => {
    axios
      .get('https://menubackend-1.onrender.com/menus') // Replace with your API endpoint
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  // Function to handle menu selection
  const handleMenuSelection = (menu) => {
    setSelectedMenu(menu);  // Set the selected menu
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
        {/* Render dynamic menu items from API */}
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
            onClick={() => handleMenuSelection(item)} // Set selected menu
          >
            {item.name}
          </button>
        ))}

        {/* Static "Add" Button (keeps its original position) */}
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
          onClick={() => navigate('/add-menu')} // Navigate to AddMenu
        >
          ADD
        </button>
      </div>
      
      {/* Pass selected menu to MenuDisplay */}
      <MenuDisplay menu={selectedMenu} />
    </>
  );
}

export default Menu;
