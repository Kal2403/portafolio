import React from 'react';
import CardTech from '../../components/CardTech/CardTech';
import './About.css';

export const About = (props) => {
  return (
    <div className='about-container'>
      <div className='about-container_description'>
        <div className='about-container_second'>
          <h1>About me</h1>
          <p className='about-container_text'> I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded,
don't hesitate to contact me.</p>
          <button className='about-btn'>Get my resume</button>
        </div>
      </div>
      <div className='about-container_cardsTech'>
        {
          props.cardTechData.map((elem) => (
            <CardTech 
              imagen={elem.imagen}
              name={elem.name}
              listTech={elem.listTech}
            />
          ))
        }
      </div>
    </div>
  )
}
