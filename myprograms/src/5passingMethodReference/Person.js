import React from 'react';

const Person = (props) =>{
    return(
        <div>
            <p>{props.children}</p>
            <p onClick={props.click}> My name is {props.name} and age is {props.age}</p> 
    </div>    
    )
}

export default Person;