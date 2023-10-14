import React from 'react';
import './Person.css'

const Person = (props) =>{
    return(
        <div className='Person'>
            <p>{props.children}</p>
            <p onClick={props.click}> My name is {props.name} and age is {props.age}</p> 
            <input type='text' placeholder='Name' onChange={props.onNameChange} value = {props.name}/>
    </div>    
    )
}
export default Person;