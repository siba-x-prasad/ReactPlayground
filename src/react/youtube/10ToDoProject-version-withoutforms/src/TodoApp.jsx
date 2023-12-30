import AppName from './components/AppName'
import AddToDo from './components/AddTodo'
import ToDoList from './components/TodoList'
import styles from './TodoApp.module.css'
import { useState } from 'react'
import InputError from './components/InputError'

function ToDoApp() {

const [todoItems, setTodoItems] = useState([]);
const [todoDate, setTodoDate] = useState('');
const [todoValue, setTodoValue] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleToDoInputChange = (event) => {
  setTodoValue(event.target.value);    
  console.log(`handleToDoInputChange ${todoValue}`)
};

const handleDateInputChange = (event) => {
  console.log(`handleDateInputChange ${event.target.value}`)
  setTodoDate(event.target.value);
};

const onDeleteClick = (todoName) => {
  console.log('Delete clicked');
  const newTodoItems = [...todoItems];
  newTodoItems.splice(newTodoItems.findIndex(a => a.todoName === todoName) , 1)
  setTodoItems(newTodoItems);
};

const onEditClick = () => {
  console.log('Edit clicked');
};

const handleSaveClick = (event) => {

  console.log(event);
  event.preventDefault();

  console.log(`handleSaveClick ${todoDate} ${todoValue}`);
  if (todoDate.trim().length !== 0 && todoValue.trim().length !== 0) {
    let result = todoItems.filter((item) => {
       console.log('Todo filter '+item.todoName +" current "+item.todoName.toString() === todoValue.trim().toString());
      item.todoName.toString() == todoValue.trim().toString();
    });
    console.log(result);

  if (todoItems.filter(e => e.todoName === todoValue).length > 0) {
      setErrorMessage('Item Already Exist');
      setTodoValue('');
      setTodoDate('');
      return;
  } 
     setErrorMessage('');
    let newTodoItem = {todoName: todoValue, todoDate: todoDate};
    let updatedTodoItems = [...todoItems, newTodoItem]; 
   setTodoItems(updatedTodoItems);
  } 
  else if (todoDate.trim().length === 0 && todoValue.trim().length === 0) {
    console.log('handleSaveClick 2');
    setErrorMessage("Please enter Todo date and todo value");
  }
  else if (todoValue.trim().length === 0) {
    console.log('handleSaveClick 3');
    setErrorMessage("Please enter Todo value");
  } else if (todoDate.trim().length === 0) {
    setErrorMessage("Please enter Todo date");
  } else {
     console.log('handleSaveClick else');
  }
 
}

  return (
    <center className={styles.todoContainer}>
    <AppName todoName = {todoValue} todoDate = {todoDate}/>
    <AddToDo 
        onTodoChange = {(event) => {handleToDoInputChange(event);}} 
        onDateChange = {(event) => {handleDateInputChange(event);}} 
        handleSaveButtonClick = {handleSaveClick}
    /> 
    {errorMessage.trim().length !== 0 && ( <InputError errorMessage = {errorMessage}/>)}
    <ToDoList todoItems={todoItems} onDeleteClick = {onDeleteClick} onEditClick = {onEditClick}/>
  </center>
  )
}

export default ToDoApp;
