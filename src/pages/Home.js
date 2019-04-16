import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
//import About from "../pages/About";
// import Navbar from "../components/NavBar"
import About from "../components/About"
// import Form from "../components/Form";
import Contact from "../pages/Contact"
import SkillSection from "../components/Skill"
import Portfolio from "../pages/Portfolio";
import { Link } from 'react-router-dom';





class Home extends Component {
  
    componentDidMount() {
        console.log("Home Component Loaded")
     
  }





  render() {
    return (
      <Container >
     
       <Jumbotron >
         <div class="jumboTitle">
         <div class="jumboText">

         <h1>Alexis Bellinger</h1>
         
         <h1></h1>
        
          <h5 class="tab">Fullstack Web Development</h5> 
         
         
        
{/*  
          <h5>Full-Stack Web Developer </h5> */}
          </div>
          </div> 
       



          </Jumbotron>
          <About >
          </About>
<hr></hr>
          <SkillSection></SkillSection>
      

          <Portfolio></Portfolio>
   
          <Contact></Contact>
      
      </Container>
    );
  }
}

export default Home;