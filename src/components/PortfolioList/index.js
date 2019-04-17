import React from "react";
import "./style.css";


// export function PortfolioList({ children }) {
//     return (
//         <div className="list-overflow-container">
//             <ul className="list-group">{children}</ul>
//         </div>
//     );
// }

// export function PortfolioListItem({ props }) {
//     return <li className="list-group-item">    
//     <div>
//         <div className="img-container">
//             <h1>{props.name}</h1> 
//             <img alt={props.name} src={props.image} /> 
//         </div>
//     </div>
//     </li>;
// }



// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
    return (
    
      <ul className="portfolio-list-group">
        {props.portfolioItems.map(item => (

          <div class="row">
          <div class="col-md-12">  
          <li className="portfolio-list-group-item" key={item.id}>
            <a href={item.link} target="_blank"> {item.name} </a>
            <img class="portfolio" src={process.env.PUBLIC_URL + item.image} alt="Thumbnal of Portfolio item"  />
            <p>{item.description}</p>
           
            <a href={item.github}>{item.name} Github </a>
            <p>{item.technologies}</p>
          </li>
          <hr></hr>
          </div>
</div>

        ))}
      </ul>
    );
  }
  
  export default List;