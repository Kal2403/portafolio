import React from 'react';
import './Form.css';
import emailjs from 'emailjs-com';

const Form = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      //'service',
      //'template',
      e.target,
      //'user-id'
    ).then((result) => {
      console.log(result.text);
      alert('Mensaje enviado con exito!');
    }, (error) => {
      console.log(error.text);
      alert('Hubo un error al enviar el mensaje, inténtalo de nuevo.');
    });
    
    e.target.reset(); // To clean Form
  }

  return (
    <form onSubmit={sendEmail} className='form'>
      <div className='form-container_name'>
        <label htmlFor="name">Name</label>
        <input id='name' name='name' type="text" placeholder='Your Name'/>
      </div>
      <div className='form-container_email'>
        <label htmlFor="email">Email</label>
        <input id='email' name='email' type="email" placeholder='Your Email'/>
      </div>
      <div className='form-container_message'>
        <label htmlFor="message">Message</label>
        <textarea id='message' name="message" cols="30" rows="10" placeholder='Hey ld like to connect to...'></textarea>
      </div>
      <button type='submit' className='form-btn'>Get in touch</button>
    </form>
  )
}

export default Form;
