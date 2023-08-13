import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-container_ul'>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav;