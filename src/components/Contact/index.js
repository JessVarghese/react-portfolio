import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';
import { Form, Button } from 'react-bootstrap'

import '../Contact/contact.css'

function ContactForm() {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { firstName, lastName, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

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
<div className='contact-form'> 


<Form id="contact-form" className='p-3' onSubmit={handleSubmit}>

  <p>Fill out the contact form below to get in touch!</p>

<Form.Group className="mb-3" controlId="firstName">
  <Form.Label defaultValue={firstName}>First Name</Form.Label>
  <Form.Control type="first-name" placeholder="First Name" />
</Form.Group>

<Form.Group className="mb-3" controlId="lastName">
  <Form.Label defaultValue={lastName}>Last Name</Form.Label>
  <Form.Control type="last-name" placeholder="Last Name" onBlur={handleChange}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control defaultValue={ email } type="email" placeholder="Enter email" onBlur={handleChange} />
</Form.Group>

<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label defaultValue={message}>Message</Form.Label>
    <Form.Control as="textarea" rows={3} onBlur={handleChange} />
  </Form.Group>
  
  {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
</div>
  );
}

export default ContactForm;
