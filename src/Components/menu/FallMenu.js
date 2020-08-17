import React from 'react';
import './menu.css';

const FallMenu = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Fall MENU</h1>

      <div className='menu'>
        <ul className='menu-list text-center w-100'>
          <li className='menu-item row'>Kale Salad..........$10</li>
          <li className='menu-item row'>
            Thanksgiving "Leftovers" Sandwich..........$12
          </li>
          <li className='menu-item row'>Philly Cheesesteak..........$12</li>
          <li className='menu-item row'>Reuben..........$12</li>
        </ul>
      </div>
      <div className='menu-pictures'>

      </div>
    </div>
  );
};

export default FallMenu;
