import React from "react";
import "../Form/style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group" id="inputForm">
      <input className="form-control" {...props} style={{width: 800}} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group" id="textAreaForm">
      <textarea className="form-control" rows="20" {...props}  />
    </div>
  );
}



export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success">
      {props.children}
    </button>
  );
}
