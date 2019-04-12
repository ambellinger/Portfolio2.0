import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import {List, ListItem} from "../components/Skill";
import "../components/Skill/style.css";




class SkillSection extends Component {
  
    componentDidMount() {
        console.log("Home Component Loaded")
  }

  render() {
    return (
      <Container >

      <List>
    
        <ListItem class="web">Web</ListItem>
        <ListItem class="writing">Writing</ListItem>
        <ListItem class="compassion">Compassion</ListItem>
        <ListItem class="teamwork">Teamwork</ListItem>
        {/* <ListItem><img src={process.env.PUBLIC_URL + '/Images/Web.jpg'} alt="Keyboard" /><span>Hey</span></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Writing.jpg'} alt="Paper with handwriting" /><span>Hey</span></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Compassion.jpg'} alt="Hands of all ages" /><span>Hey</span></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Teamwork.jpg'} alt="Downtown buildings" /><span>Hey</span></ListItem> */}
      </List>
       
      
      
      </Container>
    );
  }
}

export default SkillSection;