import React,{useState} from 'react'; 
import Person from '../3state/PersonState';

const ReactHookApp = props =>{

    const [personsState,setPersonStateArray] = useState(
        {
            persons : [
                {name: 'Siba', age: 32},
                {name: 'Prasad', age: 31},
                {name: 'Silu', age: 30},
                {name: 'Ravu', age: 29},
                {name: 'Shyam', age: 28}
            ],
            myTitle: 'Another variable inside state',
            otherState: 'Some Other state'
        }
    );

        // we can set variable to myTitle and 
        const [otherState,setOtherState] = useState('Some Other value');
        //  we can add one more element in the state
        const [title,setTitle] = useState('My Title');
    console.log(personsState);

    const switchHandler = () =>{
        // we can use this.setState instead of setPersonStateArray
        setPersonStateArray({
            persons : [
                {name: 'SibaPrasad', age: 32} 
             ]
          } 
        )
    };

    return(
        <div className='ReactHookApp'>
                <button onClick={switchHandler}>Switch Name</button>
                <Person name="Sibaprasad" age="32">My Details</Person>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
                <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
                <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/> 
        </div>
    )
}
export default ReactHookApp;