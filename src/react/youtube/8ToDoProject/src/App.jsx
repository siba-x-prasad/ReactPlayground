import AppName from './components/AppName'
import AddToDo from './components/AddTodo'
import ToDoItem from './components/ToDoItem'
import ToDoList from './components/TodoList'
import './App.css'


function App() {

const todoItems = [{
  todoName : 'Milk',
  todoDate : '31/12/2023'
},
{
  todoName : 'APpointment',
  todoDate : '17/01/2024'
},
{
  todoName : 'Appointment',
  todoDate : '18/01/2024'
}
];

  return (
    <center className='todo-container'>
    <AppName/>
    <AddToDo/> 
   <ToDoList todoItems={todoItems}/>
   
  
  </center>
  )
}

export default App
