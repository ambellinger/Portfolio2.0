import React, { Component } from "react";
import "./style.css";

class SkillSection extends Component {

    componentDidMount() {
        console.log("Home Component Loaded")
    }

    render() {
        return (

            <div className="list-overflow-container">
                <ul className="list-group">
                    <li className="list-group-item web" id="skill"><span>Intuitive <br></br>Web development</span></li>
                    <li className="list-group-item writing" id="skill"><span>Creative<br></br> Writing</span></li>
                    <li className="list-group-item compassion" id="skill"><span>Compassionate Motivation </span></li>
                    <li className="list-group-item teamwork" id="skill"><span>Leadership & <br></br>Team Work</span></li>
                </ul>
                <hr></hr>
            </div>
        )
    }

}

export default SkillSection;


