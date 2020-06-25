import React from "react";
import Radium from "radium";
import "./Person.css"

const Person = (props) => {
   
      
    return (<div className= "Person">
        <p onClick= {props.click}>Are you a {props.name}? and your age is: {props.age}</p>
        <p>{props.children}</p>
        <input type="text"  value= {props.name}/>
        </div>
    )
};

export default Radium(Person);