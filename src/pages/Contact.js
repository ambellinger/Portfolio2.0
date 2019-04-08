import React, { Component } from "react";
import "../components/Form/style.css";
import { Input, TextArea, FormBtn } from "../components/Form";
// import { Link } from "react-router-dom";



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
      // API.saveBuilding({
      //     name: this.state.name,
      //     architect: this.state.architect,
      //     neighborhood: this.state.neighborhood,
      //     address: this.state.address,
      //     image: this.state.image,
      //     description: this.state.description,
      //     year: this.state.year,
      //     rating: this.state.rating,
      //     created_by: sessionStorage.getItem("userid")


      // })
      // .then(this.clearForm())

      // .catch(err => console.log(err));
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
      //Attempting CSS Grid   
      <div className="grid">
        {/* <header>About</header> */}
        <aside></aside>
        <aside class="sidebar-left tree" >
          <img src={process.env.PUBLIC_URL + '/Images/BWTree.jpg'} alt="Statue of black and white angel" />
        </aside>

        <aside class="sidebar-right">
        {/*Form Area*/}
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
       

        </aside>
        <aside></aside>
        <hr></hr>
      </div>

    );
  }
}


export default Contact;