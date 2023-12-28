import AddToDo from "./components/AddTodo";
import AppName from "./components/AppName";
import ToDoItem2 from "./components/ToDoItem2";
import ToDoItem from "./components/TodoItem";
import "./styles/App.css"

function App() {

  return <center className='todo-container'>
    <AppName/>
    <AddToDo/> 
    <div className="item-container">
    <ToDoItem/> 
    <ToDoItem2/>
    </div>
   
  
  </center>
}

export default App
