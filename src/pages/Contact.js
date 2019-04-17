import React, { Component } from "react";
import "../components/Form/style.css";
import { Input, TextArea, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";




class Contact extends Component {

  state = {
    name: "",
    email: "",
    message: "",

  };

  componentDidMount() {
    console.log("Contact Component Loaded")
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      alert("Form Submitted" + this.state.name + this.state.email + this.state.message)
      this.clearForm()
   
    }
  };

  clearForm = () => {
    this.setState({
      name: "",
      email: "",
      message: ""
    })
  };



  render() {
    return (
      <Container>
     <div className="contact-container">
    
    <Row>
    <Col size="md-3"> Here</Col> 
        <Col size="md-3"> Here2</Col> 
       <div className="formstyle">
        {/*Form Area*/}

       
        <Col size="md-1"> 
        <h3>Contact</h3>
          <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="name" />
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="email" />
          <TextArea
            value={this.state.message}
            onChange={this.handleInputChange}
            name="message"
            placeholder="message" />
          <FormBtn
            id="submitBtn"
            disabled={!(this.state.name)}
            onClick={this.handleFormSubmit}
          >
          <i class="fas fa-paper-plane"></i>
          </FormBtn>
          </Col>

          </div>
          </Row>
          </div>
 

         
          </Container>
  

    );
  }
}


export default Contact;