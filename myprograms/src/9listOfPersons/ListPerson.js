import React,{useState, Component} from 'react'; 
import Person from '../8renderListConditionally/Person';
import { render } from '@testing-library/react';
import { white } from 'color-name';

class ListPerson extends Component{

    state = {
        persons : [
            {name: 'Siba', age: 32},
            {name: 'Prasad', age: 31},
            {name: 'Silu', age: 30},
            {name: 'Ravu', age: 29},
            {name: 'Shyam', age: 28}
        ],
        myTitle: 'Another variable inside state',
        showPersons: false
    }

     togglePersonHandler = () =>{
         console.log('Switch handler Clicked');
         const doesShow = this.state.showPersons;
         this.setState({showPersons: !doesShow})
     } 


    render(){

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map(person =>{
                        return <Person name={person.name}
                                age={person.age}
                                />
                    })}
                </div>
            );
        }

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
                    onClick={ this.togglePersonHandler} >Show Persons</button>
                    {
                        persons
                    }
            </div>
        )
    };
}
export default ListPerson;