import React from 'react';
import Form from '../../components/Form/Form';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <h2>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</h2>
        <div className='contact-container_form'>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact;
