import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import {PortfolioList, PortfolioListItem } from "../components/PortfolioList"
import portfolio from "../../src/portfolio.json";


class Portfolio extends Component {
  
  state = {
    portfolio: portfolio
  }

  componentDidMount = () => {
    console.log(this.state.portfolio)
  }
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
       
          {/* <PortfolioList>
          {this.state.portfolio.map(portfolio => (
            <PortfolioListItem 
            name={portfolio.name}
            
            />

          ))}

</PortfolioList> */}



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