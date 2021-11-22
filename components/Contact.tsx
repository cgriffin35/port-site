import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';

interface ContactProps {

}

const Contact: React.FC<ContactProps> = ({}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    emailjs.sendForm('service_xms2z8r', 'template_s6schnh', event.target, 'user_N51X1LmQfoJxJbnZN1p3j')
  };

  return (
    <div id="contact">
      <style>
        {`
          .btn-outline-purple {
            background-color: transparent;
            color: #450170;
            border: 2px solid
          }
        `}
      </style>

      <div id="contactBG" className="m-3 p-5">
        <h2 className="display-4 text-center">
          <strong id="contactText">Contact Me</strong>
        </h2>
        <div>
          <p className="fs-5 text-center text-light">Got any questions or just want to talk? Contact me! I don&#39;t bite 😊</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="m-2 text-light ">
              <Form.Label className="fs-4">Name</Form.Label>
              <Form.Control required name="name" type="text" placeholder="Enter name..." />
            </Form.Group>
            <Form.Group className="m-2 text-light ">
              <Form.Label className="fs-4">Email</Form.Label>
              <Form.Control required name="user_email" type="email" placeholder="Enter email..." />
            </Form.Group>
            <Form.Group className="m-2 text-light ">
              <Form.Label className="fs-4">Message</Form.Label>
              <Form.Control required as="textarea" rows={5} name="message" placeholder="Enter message..." />
            </Form.Group>
            <button className="my-5 mx-2 btn btn-outline-purple" type="submit">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;