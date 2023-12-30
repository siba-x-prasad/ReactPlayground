



import styles from './AddToDo.module.css';
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react';

function AddToDo({ onNewItem }) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    console.log(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    console.log("todoName "+todoName+" dueDate "+dueDate);
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
  <div className={`${styles.addToDoContainer} text-center`}>
  <form className={`${styles.spRow} row`}
     onSubmit={handleAddButtonClicked}
  >
    <div className = "col-6">
      <input 
            className={styles.spInput} 
            type="text" 
            placeholder="Enter TODO here"
            value={todoName}
            onChange={(event) => handleNameChange(event)}
            />
    </div>
    <div className="col-4">
      <input 
            className={styles.spInput} 
            type="date" 
            value={dueDate}
            onChange={(event) => handleDateChange(event)}
            />
    </div>
    <div className="col-2">
    
      <button className={`${styles.spButton} btn btn-success`}>
              <IoMdAdd/>
      </button>
    </div>
  </form>
  </div>
  )
}

export default AddToDo;
