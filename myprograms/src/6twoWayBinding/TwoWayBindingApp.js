import React,{useState, Component} from 'react'; 
import Person from './Person';
import { render } from '@testing-library/react';
import { white } from 'color-name';

class TwoWayBindingApp extends Component{

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

     switchHandler = (newName,age) =>{
         console.log('Switch handler Clicked');
         this.setState(
            {
                persons : [
                    {name: newName, age: age},
                    {name: 'Prasad new', age: 31},
                    {name: 'Silu new ', age: 30},
                    {name: 'Ravu new ', age: 29},
                    {name: 'Shyam new', age: 28}
                ],
                myTitle: 'Another variable inside state',
                count: 0
            }
         )
    } 

    onNameChange = (event) =>{
        console.log('Switch handler Clicked');
        this.setState(
           {
               persons : [
                   {name: event.target.value, age: 123},
                   {name: 'Prasad new', age: 31},
                   {name: 'Silu new ', age: 30},
                   {name: 'Ravu new ', age: 29},
                   {name: 'Shyam new', age: 28}
               ],
               myTitle: 'Another variable inside state',
               count: 0
           }
        )
   } 

   onAgeChange = (event) =>{
    console.log('Switch handler Clicked');
    this.setState(
       {
           persons : [
               {name: 'Sibaprasad', age: event.target.value},
               {name: 'Prasad new', age: 31},
               {name: 'Silu new ', age: 30},
               {name: 'Ravu new ', age: 29},
               {name: 'Shyam new', age: 28}
           ],
           myTitle: 'Another variable inside state',
           count: 0
       }
    )
}

    render(){

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };


        return(
            <div className='ReactHookApp'>
                    <button 
                    style={style}
                    onClick={ () => this.switchHandler('Button Click Name', 55)} >Switch Name</button>
                    <Person 
                        name="Sibaprasad" 
                        age="32"> My Details </Person>
                    <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}/>
    
                    <Person 
                        click={this.switchHandler.bind(this,'Sibaprasad Mohanty', 55)} 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}/>
    
                    <Person 
                        click={this.switchHandler.bind(this,'Mohanty', 110)} 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}/>
    
                    <Person  
                        name={this.state.persons[3].name} 
                        age={this.state.persons[3].age} 
                        onNameChange={this.onNameChange}
                        onAgeChange={this.onAgeChange}
                        >
                            Click Handler
                    </Person> 
            </div>
        )
    };
}
export default TwoWayBindingApp;