import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';





function Jumbotron ({children}) {


  return (
   
    <div 
    style={styles.container}
    className="jumbotron" 
    id="jumbo"
    >
     <nav className="navbar">
                <section className="navbar-section ">
                    <ul>
                      {/* <li> <div className="text-secondary">Alexis Fullstack Developer</div></li> */}
                       <li> <Link to="/viewsaved" className="text-secondary">
                            <div className="text-secondary">Home</div>
                        </Link></li>
                        <li><Link to="/new" className="text-secondary" >
                            <div className="text-secondary">About</div></Link></li>
                            <li><Link to="/new" className="text-secondary" >
                            <div className="text-secondary">Portfolio</div></Link></li>
                            <li><Link to="/new" className="text-secondary" >
                            <div className="text-secondary">Contact</div></Link></li>
                        
                    </ul>
                </section>

            </nav>
            

    {children}
{/*    
   <hr></hr> */}
    </div>
    
  )
}


const styles = {
    container: {
      
     backgroundImage: 'url(/Images/Stars.jpg)',
     height: 300,
     backgroundSize: 'cover',
     overflow: 'hidden',
     fontSize: 30, 
     letterSpacing: 3,
    
    //  padding: 150, 
     color: "#DCDCDC",
     
  }
};
export default Jumbotron;



