import React, { Component } from 'react';  
import Person from './PersonState' 

class StateApp extends Component {

    state = {
        persons : [
            {name: 'Siba', age: 32},
            {name: 'Prasad', age: 31},
            {name: 'Silu', age: 30},
            {name: 'Ravu', age: 29},
            {name: 'Shyam', age: 28}
        ],
        myTitle: 'Another variable inside state',
        count: 0
    }

     switchHandler = () =>{
         console.log('Switch handler Clicked');
    } 

    render(){
        return (
            <div>  
                <h1> Title is : {this.state.myTitle} </h1>
                <button onClick={this.switchHandler}>Switch Name</button>
                <Person name="Sibaprasad" age="32">My Details</Person>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/> 
            </div>
        )
    };
} 
export default StateApp;
