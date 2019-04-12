import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
//import About from "../pages/About";
import About from "../components/About"
// import Form from "../components/Form";
import Contact from "../pages/Contact"
import SkillSection from "../components/Skill"
import Portfolio from "../pages/Portfolio"



class Home extends Component {
  
    componentDidMount() {
        console.log("Home Component Loaded")
  }

  render() {
    return (
      <Container >
       <Jumbotron >
          <h1> Alexis </h1>
          <h1>Bellinger </h1>
          <br></br>
          <h5> Full-Stack Web Developer </h5>
          </Jumbotron>
          <SkillSection></SkillSection>
      
          {/* <h3> About </h3> */}
          <About >
          </About>
          <hr></hr>
          <Portfolio></Portfolio>
          {/* <h3> Contact </h3> */}
          <Contact></Contact>
          
            {/* <Link to="/">← Home</Link> */}
      
      </Container>
    );
  }
}

export default Home;