import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ethan from '../../pictures/Ethan.png';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg shadow-lg  navbar-dark bg-primary rounded '>
        <img src={Ethan} width="50px" className="rounded"></img>
        <div className="h3 ml-3">MY PORTFOLIO</div>
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
                My PROJECTS
              </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset ' to='/ContactForm'>
                CONTACT
              </Link>
            </li>
            <li className='nav-item font-weight-bold'>
              <Link className='nav-link text-reset ' to='/Resume'>
                RÉSUMÉ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
