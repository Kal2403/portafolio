import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-container_ul'>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav;