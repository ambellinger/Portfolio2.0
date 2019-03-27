import React from 'react';
import "./style.css";



function Jumbotron ({children}) {
  return (
   
    <div 
    style={styles.container}
    className="jumbotron" 
    id="jumbo"
    >
 
    {children}
   
   <hr></hr>
    </div>
    
  )
}


const styles = {
    container: {
     backgroundImage: 'url(/Images/Flowers.jpg)',
     height: 800,
     backgroundSize: 'cover',
     overflow: 'hidden',
     fontSize: 60, 
     letterSpacing: 3,
     textAlign: "right", 
     padding: 150, 
     color: "#DCDCDC",
 
     
   
     
  }
};
export default Jumbotron;



