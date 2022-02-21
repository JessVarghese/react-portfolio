import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap'

import '../Contact/contact.css'

function ContactForm() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const findFormErrors = () => {
    const { name, email, message } = form;
    const newErrors = {};
    // name errors
    if (!name || name === "") newErrors.name = "cannot be blank!";
    else if (name.length > 30) newErrors.name = "name is too long!";

    // Email errors
    if (!email || email > 5 || email < 1)
      newErrors.email = "Please enter a valid email address";
    else if (!/\S+@\S+\.\S+/)
      newErrors.email = "Please enter a valid email address";

    // message errors
    if (!message || message === "") newErrors.message = "cannot be blank!";
    else if (message.length > 100) newErrors.message = "Message is too long!";

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      alert("Thank you!");
    }
  };

  return (
    <div className=" mx-auto my-5 contact-form d-flex flex-column align-items-center">
      <h1 className="p-3">Fill out the form to get in touch!</h1>

      <Form className="mx-auto my-5 " style={{ width: "300px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="textarea"
            as="textarea" rows={3}
            onChange={(e) => setField("name", e.target.value)}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="m-3" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
