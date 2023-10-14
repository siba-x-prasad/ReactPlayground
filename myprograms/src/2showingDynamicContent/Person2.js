import React from 'react';

const person2 = (props) =>{
    return (
        <div> 
            <h1>Title is : {props.children}</h1>
            <p> My name is {props.name} and my age is {props.age} </p>
         </div>   
    )
};
export default person2;