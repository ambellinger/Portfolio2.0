import React, { Component } from "react";
// import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
// import BWAngel from "../../public/Images/BWAngel.jpg"
// import Jumbotron from "../components/Jumbotron";


class About extends Component {
  
    componentDidMount() {
        console.log("About Component Loaded")
  }

  render() {
    return (

   //Attempting CSS Grid   
      <div className="wrapper">
        <div className="section">
          <div className="smallSection">
          Something here
          {/* <img src="/BWAngel.jpg"   alt="Statue of an angel" />; */}
          </div>

          <div className="smallSection">
          Something else
          </div>
        
        </div>
      
      </div>



//W/ Bootstrap
      // <Container fluid>
      //   <Row>
      //     <Col size="md-12">
      //       <h1>About Page</h1>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col size="md-6">
      //     <h2>blah blah blah blah</h2>
      //     </Col>
        
      //     <Col size="md-6">
      //     <h2>blah blah blah blah2</h2>
      //       <Link to="/">← Home</Link>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default About;