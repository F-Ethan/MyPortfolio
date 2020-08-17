import React from 'react';
import './menu.css';

const SpringMenu = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>SPRING MENU</h1>

      <div className='menu'>
        <ul className='menu-list text-center w-100'>
          <li className='menu-item row'>Falafel Wrap..........$10</li>
          <li className='menu-item row'>Chicken Tacos..........$8</li>
          <li className='menu-item row'>Kale Salad..........$10</li>
          <li className='menu-item row'>Lamb Gyro..........$11</li>
        </ul>
      </div>
      <div className='menu-pictures w-100'>

      </div>
    </div>
  );
};

export default SpringMenu;
