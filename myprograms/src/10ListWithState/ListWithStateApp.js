import React,{useState, Component} from 'react'; 
import Person from './Person';
import { render } from '@testing-library/react';
import { white } from 'color-name';

class ListWithStateApp extends Component{

    state = {
        persons : [
            {id: 'id1', name: 'Siba', age: 32},
            {id: 'id2', name: 'Prasad', age: 31},
            {id: 'id3', name: 'Silu', age: 30},
            {id: 'id4', name: 'Ravu', age: 29},
            {id: 'id5', name: 'Shyam', age: 28}
        ],
        myTitle: 'Another variable inside state',
        showPersons: false
    }

     togglePersonHandler = () =>{
         console.log('Switch handler Clicked');
         const doesShow = this.state.showPersons;
         this.setState({showPersons: !doesShow})
     } 

     nameChangeHandler = (event,id) =>{
        
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        })
    
        // const person = this.state.persons[personIndex];

        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;


        console.log(event.target.name);

        const persons = [...this.state.persons];
        persons[personIndex] = person ;
        this.setState({persons});
    } 

     deletePersonHandler = (personIndex) =>{
        //  const persons = this.state.persons.splice(personIndex,1); 
         const persons = [...this.state.persons];
         persons.splice(personIndex,1);
         this.setState({persons:persons});
    } 

    render(){

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return <Person name={person.name}
                                age={person.age}
                                deletePerson={ () => this.deletePersonHandler(index)}
                                changed ={ (event) => this.nameChangeHandler(event,person.id)}
                                key={person.id} 
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
export default ListWithStateApp;