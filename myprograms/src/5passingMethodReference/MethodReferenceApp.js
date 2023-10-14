import React,{useState, Component} from 'react'; 
import Person from './Person';
import { render } from '@testing-library/react';

class MethodReferenceApp extends Component{

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

    render(){
        return(
            <div className='ReactHookApp'>
                    <button onClick={ () => this.switchHandler('Button Click Name', 55)} >Switch Name</button>
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
                        onClick
                        name={this.state.persons[3].name} 
                        age={this.state.persons[3].age} 
                        >
                            Click Handler
                    </Person> 
            </div>
        )
    };
    
}
export default MethodReferenceApp;