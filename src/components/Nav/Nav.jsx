import React from 'react'
import './Nav.css'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-container_ul'>
        <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li><Link to='portfolio' smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to='about' smooth={true} duration={500}>About</Link></li>
        <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav;
