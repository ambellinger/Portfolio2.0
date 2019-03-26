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
     fontSize: 75, 
     textAlign: "center", 
     padding: 150, 
     color: "white"
     
  }
};
export default Jumbotron;



