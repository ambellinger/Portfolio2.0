
import "./style.css";

import React, { Component } from "react";
//import { Link } from "react-router-dom";

// import {List, ListItem} from "../components/Skill";





class SkillSection extends Component {
  
    componentDidMount() {
        console.log("Home Component Loaded")
  }

  render() {
    return (
      
          <div className="list-overflow-container">
      <ul className="list-group">
      <li className="list-group-item web"><span>Intuitive Web development</span></li>
      <li className="list-group-item writing"><span>Creative<br></br> Writing</span></li>
      <li className="list-group-item compassion"><span>Compassionate Motivation </span></li>
      <li className="list-group-item teamwork"><span>Leadership and Team Work</span></li>
      </ul>
      <hr></hr>
     </div>  
    )
      /* <List>
    
        <ListItem class="web">Web</ListItem>
        <ListItem class="writing">Writing</ListItem>
        <ListItem class="compassion">Compassion</ListItem>
        <ListItem class="teamwork">Teamwork</ListItem> */
        /* <ListItem><img src={process.env.PUBLIC_URL + '/Images/Web.jpg'} alt="Keyboard" /><span>Hey</span></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Writing.jpg'} alt="Paper with handwriting" /><span>Hey</span></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Compassion.jpg'} alt="Hands of all ages" /><span>Hey</span></ListItem>
        <ListItem><img src={process.env.PUBLIC_URL + '/Images/Teamwork.jpg'} alt="Downtown buildings" /><span>Hey</span></ListItem> */}
      /* </List> */
       
      
      
     
    

}

export default SkillSection;





// // This file exports both the List and ListItem components

// export function List({ children }) {
//   return (
//     <div className="list-overflow-container">
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>




// }
