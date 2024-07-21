import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Home from '../../containers/Home/Home';
import Portfolio from '../../containers/Portfolio/Portfolio';
import { About } from '../../containers/About/About';
import Contact from '../../containers/Contact/Contact';

const Nav = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-container_ul'>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav;