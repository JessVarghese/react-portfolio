import React, { useState } from 'react';
import '../Contact/contact.css'
import { validateEmail } from '../../utils/helpers';
import { Button, Form } from 'react-bootstrap';
import {Animated} from "react-animated-css";

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!errorMessage) {
  //     console.log('Submit Form', formState);
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    
    <div>
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      {/* GetForm submissions string */}
      <Form action="https://getform.io/f/e47512c3-bab4-486c-8133-a476272784c6" method="POST" className="contact-form">
      <h1 data-testid="h1tag" className='contact-me p-5'>Contact me</h1>
      <h4>Fill out the form to get in touch</h4>
      
      <Form.Group className="mb-1">
          <label className="p-3" htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </Form.Group>

        <Form.Group className="mb-1">
          <label className="p-3" htmlFor="email">Email:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </Form.Group>
        
          <Form.Group className="mb-1">
          <label className="p-2" htmlFor="message">Message:</label>
          <textarea name="message"  defaultValue={message} onBlur={handleChange} />
          </Form.Group>
          
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button data-testid="button" type="submit" size="lg" variant="primary p-2 m-2">Submit</Button>
      </Form>
     
      </Animated>
    </div>
    
  );
}

export default ContactForm;
