import React, {Component} from 'react';
import logo from './logo.svg';
import Radium, { StyleRoot } from "radium";
import './App.css';
import Person from "./Person/Person.js";

 class App extends Component {

  state = {
    persons: [
      {id:"q3",name:"Max", age: "25"},
      {id:"q2",name:"zax", age: "26"},
      {id:"q1",name:"Lax", age: "27"}

    ],
    showPersons : false
  };
  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( { persons : persons } )
  }

  deletingNameHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
   };

  toggleNameHandler = () => {
    const doesChange = this.state.showPersons;
    this.setState({showPersons: !doesChange})
  };
  

render(){

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ":hover": {
        backgroundColor:"lightGreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {//by maping the persons array we are slicing it's id
          return <Person 
          key={person.id}
           name= {person.name} 
           age= {person.age} 
           click = {() => this.deletingNameHandler(index)}/>
           //olternativly {this.deletingNameHandler.bind(this, index)}
        })}
        </div>
        )
        style.backgroundColor = "red";
        style[":hover"]= {
          backgroundColor:"salmon",
          color: "black"//this is changed the hover effects when the persons array got trimmed
        }
      
      }
      let classes = [];
      if (this.state.persons.length <= 2){
        classes.push("red")// this will push the red class to asigned element
      }
      if (this.state.persons.length <= 1){
        classes.push("bold"); // by asigning that it will asign both the classes
      };


    return (
    
    <div className= "App">
    <h1>I'm a React App</h1>
    <p className= {classes.join(" ")}>It's really working</p>
    <button onClick={this.toggleNameHandler} style= {style}>Swtich Name</button>
    {persons}
     </div>)
     
    };
    
     


}

export default Radium(App);

