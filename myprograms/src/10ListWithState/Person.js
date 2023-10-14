import React from 'react';
import './Person.css'

const Person = (props) =>{

    const inputStyle = {
        border: '2px solid red'
    };

    return(
        <div className='Person'>
            <p>{props.children}</p>
            <p> My name is {props.name} and age is {props.age}</p>
            <input 
                    type="text" 
                    style={inputStyle}
                    onChange={props.changed} 
                    value={props.currentName}
                    /> 
            <button onClick={props.deletePerson}>Delete</button>
    </div>    
    )
}
export default Person;