import React from 'react'; 
import './App.css';
import Person1 from './1functionalComponent/Person1'
import Person2 from './2showingDynamicContent/Person2'

function App() {
  return (
    <div className="App">
       <h1> Hi, Welcome to React JS </h1>
       <Person1/>
       <Person1/>
       <Person1/>
       <Person1/>
       <Person1/>
       <Person1/>
       <Person2 name="Siba" age='28'>My Name And Age details</Person2>
    </div>
  );
}

export default App;
