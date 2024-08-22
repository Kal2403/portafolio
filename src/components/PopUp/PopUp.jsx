import React from 'react';
import './PopUp.css';

function PopUp({ closePopUp, name, tecnologys, img, description }) {
  return (
    <div className="popup" onClick={closePopUp}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={closePopUp}>&times;</span>
        <div className='popup-content-descrip'>
          <h2>{name}</h2>
          <ul>
          {
            tecnologys.map(element => (
              <li>{element}</li>
            ))
          }
          </ul>
        <p>{description}</p>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default PopUp;
