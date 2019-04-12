import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import {PortfolioList, PortfolioListItem } from "../components/PortfolioList"


class Portfolio extends Component {
  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <h2>Portfolio Page</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          <h6>Clicky Game</h6>
          <img src={process.env.PUBLIC_URL + '/Images/Writing.jpg'} />




          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            {/* <Link to="/">← Home</Link> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;