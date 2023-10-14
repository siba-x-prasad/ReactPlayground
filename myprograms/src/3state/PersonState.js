import React from 'react';
import { render } from '@testing-library/react';

const PersonState = (props) =>{
    return(
        <div>   
            <h1> Title : {props.children} </h1>
            <p> My name is {props.name} and Age is {props.age}</p>
        </div>
    )
};

export default PersonState;