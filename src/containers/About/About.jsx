import React from 'react';
import './About.css';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";

export const About = () => {
  return (
    <div className='about-container'>
      <div className='about-container_description'>
        <h2>About me</h2>
        <p className='about-container_text'> I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded,
don't hesitate to contact me.</p>
        <button className='about-btn'>Get my resume</button>
      </div>
      <div className='about-container_cardsTech'>
        <h2>Tecnologys</h2>
        <div className='icon-container'>
          <FaHtml5 className='icon'/>
          <FaCss3Alt className='icon'/>
          <IoLogoJavascript className='icon'/>
          <FaReact className='icon' />
          <FaGitSquare className='icon' />
          <FaGithub className='icon' />
          <SiMongodb className='icon' />
          <FaNode className='icon' />  
        </div>
      </div>
    </div>
  )
}
