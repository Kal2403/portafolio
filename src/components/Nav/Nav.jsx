import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';
import { MdOutlineMenu } from "react-icons/md";

const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div className='nav-container'>
      <h2>Kal<span>Tech</span></h2>
      {
        openMenu && (
          <ul className={`nav-container_ul ${openMenu ? 'open' : ''}`}>
            <li><Link to='home' smooth={true} duration={700} onClick={closeMenu}>Home</Link></li>
            <li><Link to='portfolio' smooth={true} duration={700} onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to='about' smooth={true} duration={700} onClick={closeMenu}>About</Link></li>
            <li><Link to='contact' smooth={true} duration={700} onClick={closeMenu}>Contact</Link></li>
          </ul>
      )}
      <div onClick={toggleMenu} className="menu-container">
        <MdOutlineMenu className='menu'/>
      </div>
    </div>
  )
}

export default Nav;
