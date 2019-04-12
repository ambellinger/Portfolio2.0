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
                    <li className="list-group-item web"><span>Intuitive <br></br>Web development</span></li>
                    <li className="list-group-item writing"><span>Creative<br></br> Writing</span></li>
                    <li className="list-group-item compassion"><span>Compassionate Motivation </span></li>
                    <li className="list-group-item teamwork"><span>Leadership & <br></br>Team Work</span></li>
                </ul>
                <hr></hr>
            </div>
        )
    }

}

export default SkillSection;


