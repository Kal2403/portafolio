import React from 'react';

const Form = () => {
  return (
    <div className='form-container'>
      <div>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <div>
        <input type="email" placeholder='Email Addres'/>
        <textarea name="textarea" cols="30" rows="10" placeholder='Hey ld like to connect to...'></textarea>
      </div>
      
      <button>Get in touch</button>
    </div>
  )
}

export default Form;
