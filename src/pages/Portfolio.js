import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


class Portfolio extends Component {
  
    componentDidMount() {
        console.log("Portfolio Component Loaded")
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h1>Portfolio Page</h1>
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

export default Portfolio;