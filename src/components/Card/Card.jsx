import React, { useState } from 'react';
import './Card.css';
import PopUp from '../PopUp/PopUp';

const Card = ({name, tecnologys, img, description}) => {

  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  }

  return (
    <div className='card-container'>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <ul>
        {
          tecnologys.map(element => (
            <li>{element}</li>
          ))
        }
      </ul>
      <button className='btn' onClick={openPopUp}>See Project</button>
      {isPopUpOpen && <PopUp closePopUp={closePopUp} name={name} tecnologys={tecnologys} img={img} description={description} />}
    </div>
  )
}

export default Card