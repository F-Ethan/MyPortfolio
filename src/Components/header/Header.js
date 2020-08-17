import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ethan from '../../pictures/Ethan.png';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light  shadow-lg  bg-white rounded '>
        <img src={Ethan} width="50px" className="rounded"></img>
        <div className="h3 ml-3">My Portfolio</div>
        <div className='d-flex flex-grow-1 justify-content-end'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        </div>

        <div
          className='collapse navbar-collapse flex-grow-1 justify-content-end text-right'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav font'>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset' to='/'>
                HOME
              </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset' to='/About'>
                ABOUT
              </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset ' to='/GitHubRepos'>
                My Projects
              </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset ' to='/ContactForm'>
                CONTACT
              </Link>
            </li>
            <div className='dropdown '>
              <button
                className='btn dropdown-toggle font-weight-bold font'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Favorite Projects
              </button>
              <div
                className='dropdown-menu'
                aria-labelledby='dropdownMenuButton'
              >
                <Link className='dropdown-item' to='/SpringMenu'>
                  The Food Truck
                </Link>
                <Link className='dropdown-item' to='/SummerMenu'>
                  Pursuit Equipment
                </Link>
                <Link className='dropdown-item' to='/FallMenu'>
                  My Portfolio
                </Link>
                <Link className='dropdown-item' to='/WinterMenu'>
                  This And That
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
