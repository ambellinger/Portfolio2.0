import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";



class Home extends Component {
  
    componentDidMount() {
        console.log("Home Component Loaded")
  }

  render() {
    return (
      <Container fluid>
       <Jumbotron >
          <h1> Alexis Bellinger </h1>
          <h3> Full-Stack Web Developer </h3>
          </Jumbotron>
        <Row>
          <Col size="md-12">
         
            <h1>Home Page</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          <h2>blah blah blah blah</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;