import React, { useState } from 'react';
import axios from 'axios';

const AddMenu = () => {
  const [menuName, setMenuName] = useState('');
  const [menuDescription, setMenuDescription] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMenu = {
      name: menuName,
      description: menuDescription,
      items,
    };

    axios
      .post('https://menubackend-1.onrender.com/menus', newMenu)
      .then((response) => alert('Menu created successfully!'))
      .catch((error) => console.error(error));
  };

  const handleAddItem = () => {
    setItems([
      ...items,
      { name: itemName, description: itemDescription, price: itemPrice },
    ]);
    setItemName('');
    setItemDescription('');
    setItemPrice('');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create a New Menu</h2>
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        {/* Menu Details */}
        <div className="mb-3">
          <label className="form-label">Menu Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter menu name"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Menu Description</label>
          <textarea
            className="form-control"
            placeholder="Enter menu description"
            value={menuDescription}
            onChange={(e) => setMenuDescription(e.target.value)}
            rows="3"
            required
          />
        </div>

        {/* Add Items Section */}
        <h4 className="mt-4">Add Items to the Menu</h4>
        <div className="row g-3 align-items-end">
          <div className="col-md-4">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Item Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter item description"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter price"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
            />
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </div>
        </div>

        {/* List of Added Items */}
        {items.length > 0 && (
          <div className="mt-4">
            <h5>Items:</h5>
            <ul className="list-group">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.name}</strong> - {item.description} (${item.price})
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="btn btn-success w-100">
            Create Menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
