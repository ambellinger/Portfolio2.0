import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import {List, ListItem} from "../components/Skill"



class SkillSection extends Component {
  
    componentDidMount() {
        console.log("Home Component Loaded")
  }

  render() {
    return (
      <Container >

      <List>
      
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Web.jpg'} alt="Keyboard" /></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Writing.jpg'} alt="Paper with handwriting" /></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Compassion.jpg'} alt="Hands of all ages" /></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Teamwork.jpg'} alt="Downtown buildings" /></ListItem>
      </List>
       
      
      
      </Container>
    );
  }
}

export default SkillSection;