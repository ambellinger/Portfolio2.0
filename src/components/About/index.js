import React, { Component } from "react";
import "./style.css";
// import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";


class About extends Component {
  
    componentDidMount() {
        console.log("About Component Loaded")
  }

  render() {
    return (
         //Attempting CSS Grid   
      <div className="grid">
    
          {/* <header>About</header> */}
          <aside></aside>
         
         
          <aside class="sidebar-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae purus quis neque semper sollicitudin. Duis eget est volutpat, ultricies magna sit amet, euismod arcu. Vivamus vestibulum, nibh at rhoncus vulputate, ante nisl ultrices justo, ac pretium mi dui vitae purus. Fusce ac massa id nibh lacinia dictum vel a augue. Morbi at venenatis orci, sit amet viverra erat. Maecenas pellentesque, mi tempor ullamcorper interdum, lacus sem posuere nulla, quis maximus nisi orci ut mi. Integer vulputate, augue eget fermentum porta, magna sapien ultrices quam, eget lacinia metus eros non eros. Fusce pellentesque maximus enim, non accumsan turpis. Praesent suscipit at nunc nec volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam lacinia sem magna, et sodales mauris aliquet id. Suspendisse aliquam cursus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mi augue, auctor sit amet maximus eu, blandit nec nulla. Integer vestibulum, magna et venenatis lacinia, eros erat sollicitudin libero, a volutpat nunc ipsum vitae eros.</aside>
          <aside class="sidebar-right angel" >
          {/* <img src={BWAngel} alt="Statue of black and white angel" /> */}
          <img src={process.env.PUBLIC_URL + '/Images/BWAngel.jpg'} alt="Statue of black and white angel" />
         </aside>
          
          <aside></aside>
        
         
         
      </div>

      
    );
  }
}


export default About;