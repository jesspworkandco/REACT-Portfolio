import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.css";

function Contact(props) {
  return (
    <Form className="form mx-sm-auto px-3 text-center">
      <h1>
        <span className="first">LET'S STAY</span>
        <span className="last">IN TOUCH</span>
      </h1>
      <Form.Group className="label mt-2" controlId="formBasicName">
        <Form.Label>From</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="label" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter you email example@gmail.com"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="label" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
        <Button className="btn" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Contact;
