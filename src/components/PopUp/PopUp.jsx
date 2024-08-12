import React from 'react';
import './PopUp.css';

function PopUp({ closePopUp, name, tecnologys, img }) {
  return (
    <div className="popup" onClick={closePopUp}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={closePopUp}>&times;</span>
        <h2>{name}</h2>
        <ul>
        {
          tecnologys.map(element => (
            <li><a href="">{element}</a></li>
          ))
        }
        </ul>
        <p>Este es un ejemplo de un modal en React.</p>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default PopUp;
