import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import List from "../components/PortfolioList"
import portfolio from "../../src/portfolio.json";


const portfolioItems= [
  {
    id: 1,
    name: "Chicago Architecture Finder",
    image: "/Images/Chicago_architecture_finder_img.png",
    link: "https://chiarchfindr.herokuapp.com/",
    description: "Chicago Architecture Finder is a fullstack React application designed to assist architecture aficionados, tourists, art history students, or anyone interested in learning about the rich history of architecture in Chicago. Architecture finder also aims to promote community involvement in historic preservation by providing a platform for individuals to tell the stories of these structures in their own words,widening the scope of user experience outside of largely constrained and canonical must-see architecture lists.",
    github: "https://github.com/ambellinger/project3",
    technologies: "MERN: Mongoose, Express, React, Node.js, passport, Morgan",
  },
  {
    id: 2,
    name: "Let's CooKit!",
    image: "/Images/LetsCookit.png",
    link: "",
    description: "Looking for an easy TV dinner tonight, or looking to impress your family? Let's CookIt! is here to help you find your next recipe & inspiration! Take us with you on your tablet, phone, or laptop...and keep your notes and recipes in ONE place. ",
    github: "https://github.com/ambellinger/team1groupproject",
    technologies: "Javascript, JQuery, Bootstrap, Sass, Firebase, AJAX",
  },
  {
    id: 3,
    name: "Namesake",
    image: "/Images/namesakepic.png",
    link: "https://arcane-bayou-22467.herokuapp.com/",
    description: "Namesake provides users the ability to research names to discover their origins and uses for further research, whether that be to save potential baby names or character names for a novel.",
    github: "https://github.com/ambellinger/project2",
    technologies: "Javascript, node.JS, mySQL, mySQL Workbench, Sequelize, Materialize, mySQL, Axios, Express, Handlebars",
  },
  {
    id: 4,
    name: "Train Scheduler",
    image: "/Images/trainscreenshot.png",
    link: "https://ambellinger.github.io/TrainScheduler/",
    description: "Train Scheduler utilizes Firebase and Moment.js to log train times, calculate the next time of arrival and the minutes until the train arrives.",
    github: "https://github.com/ambellinger/TrainScheduler",
    technologies: "Javascript, JQuery, Firebase, Moment.js., Bootstrap"
  },
  {
    id: 5,
    name: "Friend Finder",
    image: "/Images/friendfinderpic.png",
    link: "https://bellinger-friend-finder.herokuapp.com/",
    description: "FriendFinder helps you find a new friend. After answering a set of questions from a range of strongly disagree to strongly agree, you can match with some of the cutest, cuddlest pet friends. Once you finish answering, you are also added to the friend database so someone can match with you!",
    github: "https://github.com/ambellinger/Friend_Finder",
    technologies: "Javascript, Bootstrap, node.JS, ArraySort, path, express ",
  },
  {
    id: 6,
    name: "Puppery",
    image: "/Images/puppery.png",
    link: "https://ambellinger.github.io/clicky_game/",
    description: "Fun game built utilizing react.js",
    github: "https://github.com/ambellinger/clicky_game2",
    technologies: "React.js",
  }
];


class Portfolio extends Component {
  
  state = {
    portfolio: portfolio
  }


  componentDidMount = () => {
    console.log(this.state.portfolio)
  }
  render() {
    return (
     
       <div>
            <h2>Portfolio Page</h2>
        
       
         <List  portfolioItems={portfolioItems} />



         </div>
    );
  }
}

export default Portfolio;