import React from 'react'
import './Portfolio.css'
import Card from '../../components/Card/Card';

const Portfolio = (props) => {

  return (
    <div id='portfolio-container'>
      <h2>My Recent Works</h2>
      <div className='cards-container'>
        {
          props.projects.map((proj) => (
            <Card 
              id={proj.id}
              name={proj.name}
              tecnologys={proj.tecnologys}
              url={proj.url}
              img={proj.img}
              description={proj.description}
            />
          ))
        }
      </div>
      
    </div>
  )
}

export default Portfolio;
