import React from 'react';
import './Card.css';

const Card = ({name, tecnologys, url, img}) => {

  console.log(img)

  return (
    <div className='card-container'>
      
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <ul>
        {
          tecnologys.map(element => (
            <li><a href="">{element}</a></li>
          ))
        }
      </ul>
      <a className='btn' href={url}>See Project</a>
    </div>
  )
}

export default Card