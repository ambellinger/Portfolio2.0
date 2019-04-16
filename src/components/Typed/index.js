import React, { Component } from "react";

class Typed extends Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
    //   const options = {
    //       strings: strings,
    //     typeSpeed: 50,
    //     backSpeed: 50
    //   };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, "options");
    }
  
  
    render() {
      return (
        <div className="wrap">
   
          <div className="type-wrap">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}

            
            />
          </div>
        
        </div>
      );
    }
  }

  export default Typed;
  
//   ReactDOM.render(
//       <TypedReactDemo
//       strings={[
//           'Some <i>strings</i> are slanted',
//         'Some <strong>strings</strong> are bold',
//         'HTML characters &times; &copy;'
//       ]}
//     />,
//     document.getElementById('react-root')
//   );