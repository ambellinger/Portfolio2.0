import React from "react";
import "./style.css";


export function PortfolioList({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

export function PortfolioListItem({ props }) {
    return <li className="list-group-item">    
    <div>
        <div className="img-container">
            {/* <h1>{props.name}</h1> */}
            {/* <img alt={props.name} src={props.image} /> */}
        </div>
    </div>
    </li>;
}
