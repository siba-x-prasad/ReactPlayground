import AppName from '../components/AppName.jsx'
import AddToDo from '../components/AddTodo.jsx'
import TodoListWithContext from './TodoListWithCOntext.jsx'
import styles from './TodoAppWithContext.module.css'
import { useState } from 'react'
import InputError from '../components/InputError.jsx'
import AddTodoWithRef from '../components/AddTodoWithRef.jsx'
import { TodoItemsContext } from '../store/todo-items-store.jsx'

function ToDoAppWithContext() {

const [todoItems, setTodoItems] = useState([]);
const [todoDate, setTodoDate] = useState('');
const [todoValue, setTodoValue] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const onDeleteClick = (todoName) => {
  console.log('Delete clicked');
  const newTodoItems = [...todoItems];
  newTodoItems.splice(newTodoItems.findIndex(a => a.todoName === todoName) , 1)
  setTodoItems(newTodoItems);
};

const onEditClick = () => {
  console.log('Edit clicked');
};

const onNewItemChange = (name, date) => {
  console.log("onNewItemChange name = "+name +" date "+date);
  saveData(name, date);
};


function saveData(name, date){
  console.log("saveData name "+name+" date "+date);
if (name.trim().length !== 0 && date.trim().length !== 0) {
    let result = todoItems.filter((item) => {
      item.todoName.toString() == name.trim().toString();
    });
    console.log(result);

  if (todoItems.filter(e => e.todoName === name).length > 0) {
      setErrorMessage('Item Already Exist');
      setTodoValue('');
      setTodoDate('');
      return;
  } 
     setErrorMessage('');
    let newTodoItem = {todoName: name, todoDate: date};
    let updatedTodoItems = [...todoItems, newTodoItem]; 
   setTodoItems(updatedTodoItems);
  } 

  else if (name.trim().length === 0 && date.trim().length === 0) {
    console.log('handleSaveClick 2');
    setErrorMessage("Please enter Todo date and todo value");
  }
  else if (name.trim().length === 0) {
    console.log('handleSaveClick 3');
    setErrorMessage("Please enter Todo value");
  } else if (date.trim().length === 0) {
    setErrorMessage("Please enter Todo date");
  } else {
     console.log('handleSaveClick else');
  }
}

  return (
    <TodoItemsContext.Provider value={todoItems}>
    <center className={styles.todoContainer}>
    <AppName todoName = {todoValue} todoDate = {todoDate}/>
    <AddToDo 
        onNewItem = {onNewItemChange} 
    /> 
    {/* <AddTodoWithRef  onNewItem = {onNewItemChange} /> */}
    {errorMessage.trim().length !== 0 && ( <InputError errorMessage = {errorMessage}/>)}
    <TodoListWithContext onDeleteClick = {onDeleteClick} onEditClick = {onEditClick}/>
  </center>
  </TodoItemsContext.Provider>
  )
}

export default ToDoAppWithContext;
