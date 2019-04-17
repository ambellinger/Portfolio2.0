import React from "react";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';

function List(props) {
    return (

        <ul className="portfolio-list-group">
            {props.portfolioItems.map(item => (

                <div class="row">
                
                    <div class="col-md-12">
                        <li className="portfolio-list-group-item" key={item.id}>

                            <div class="row">
                                <div class="col-md-4">

                                   
                                    <div id="card-img">
                                        <img class="portfolio" src={process.env.PUBLIC_URL + item.image} alt="Thumbnal of Portfolio item"  />
                                        </div>
                                
                                <div class="col-md-8">

                                    <h4>
                                        <a href={item.link} target="_blank" class="text"> {item.name} </a>
                                        </h4>
                                    
                                    <p>{item.description}</p>

                                    <p>Github: <a href={item.github} className="fab fa-github"></a></p>
                                    

                                    <p>Technologies: {item.technologies}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                      
                    </div>

                </div>

            ))}
        </ul>
    );
}

export default List;