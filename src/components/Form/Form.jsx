import React from 'react';
import './Form.css'

const Form = () => {
  return (
    <div className='form-container'>
      <div className='form-container_name'>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <div className='form-container_emailComments'>
        <input type="email" placeholder='Email Addres'/>
        <textarea name="textarea" cols="30" rows="10" placeholder='Hey ld like to connect to...'></textarea>
      </div>
      
      <button className='form-btn'>Get in touch</button>
    </div>
  )
}

export default Form;
