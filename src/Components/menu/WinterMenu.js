import React from 'react';
import './menu.css';

const WinterMenu = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Winter MENU</h1>

      <div className='menu'>
        <ul className='menu-list text-center w-100'>
          <li className='menu-item row'>
            6 cheese Grilled Cheese..........$10
          </li>
          <li className='menu-item row'>
            Smoked Pork belly sandwich.........$12
          </li>
          <li className='menu-item row'>Philly Cheesesteak..........$10</li>
          <li className='menu-item row'>Classic Sliders..........$10</li>
        </ul>
      </div>
      <div className='menu-pictures'>

      </div>
    </div>
  );
};

export default WinterMenu;
