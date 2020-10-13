import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.css";

class Contact extends React.Component {
  state = {
    from: "",
    email: "",
    message: "",
  };
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state with input captured
    this.setState({
      [name]: value,
    });
  };
  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    //alerting user the message has been sent
    alert(`Hello ${this.state.name}, your message has been sent!`);
    //reset input areas
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="form mx-sm-auto px-3 text-center"
      >
        <h1>
          <span className="first">LET'S STAY</span>
          <span className="last">IN TOUCH</span>
        </h1>
        <Form.Group className="label mt-2" controlId="formBasicName">
          <Form.Label>From</Form.Label>
          <Form.Control
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="label" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Enter you email example@gmail.com"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="label" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            as="textarea"
            rows="3"
          />
          <Button onClick={this.handleFormSubmit} className="btn" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
export default Contact;
