import React from 'react'
import './Portfolio.css'
import Card from '../../components/Card/Card';

const Portfolio = (props) => {

  return (
    <div id='portfolio-container'>
      <h1>My Recent Works</h1>
      <div className='cards-container'>
        {
          props.projects.map((proj) => (
            <Card 
              id={proj.id}
              name={proj.name}
              tecnologys={proj.tecnologys}
              url={proj.url}
              img={proj.img}
            />
          ))
        }
      </div>
      
    </div>
  )
}

export default Portfolio;
