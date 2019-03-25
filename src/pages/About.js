import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


class About extends Component {
  
    componentDidMount() {
        console.log("About Component Loaded")
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>About Page</h1>
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

export default About;