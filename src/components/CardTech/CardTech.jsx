import React from 'react';
import './CardTech.css'

const CardTech = ({imagen, name, listTech}) => {

  return (
    <div className='cardTech-container'>
      <img src={imagen} alt={name} />
      <h2>{name}</h2>
      <ul className='cardTech-container_listTech'>
        {
          listTech.map((elem) => (
            <li>{elem}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default CardTech;
