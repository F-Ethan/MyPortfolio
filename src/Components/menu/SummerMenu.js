import React from 'react';
import './menu.css';

const SummerMenu = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>SUMMER MENU</h1>

      <div className='menu'>
        <ul className='menu-list text-center w-100'>
          <li className='menu-item row'>Classic Buger..........$10</li>
          <li className='menu-item row'>
            Crispy Chicken Sandwitch..........$12
          </li>
          <li className='menu-item row'>Quinoa Vegetable Bowl..........$9</li>
          <li className='menu-item row'>
            Strawberry Banana Smoothie..........$6
          </li>
        </ul>
      </div>
      <div className='menu-pictures'>

      </div>
    </div>
  );
};

export default SummerMenu;
