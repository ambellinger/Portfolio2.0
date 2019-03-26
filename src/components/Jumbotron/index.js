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
   
    </div>
  )
}


const styles = {
    container: {
     backgroundImage: 'url(/Images/Leaves.jpg)',
     height: 800,
     backgroundSize: 'cover',
     overflow: 'hidden',
     fontSize: 60, 
     letterSpacing: 3,
     fontFamily: 'Titillium Web',
     textAlign: "center", 
     padding: 150, 
     color: "white",
     textshadow: 5 ,
     
   
     
  }
};
export default Jumbotron;



