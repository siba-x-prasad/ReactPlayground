import styles from './AddToDo.module.css';
import { IoMdAdd } from "react-icons/io";

function AddToDo({onTodoChange, onDateChange, handleSaveButtonClick}) {
  return (
  <div className={`${styles.addToDoContainer} text-center`}>
  <div className={`${styles.spRow} row`}>
    <div className = "col-6">
      <input 
            className={styles.spInput} 
            type="text" 
            placeholder="Enter TODO here"
            onChange={(event) => onTodoChange(event)}
            />
    </div>
    <div className="col-2">
      <input 
            className={styles.spInput} 
            type="date" 
            onChange={(event) => onDateChange(event)}
            />
    </div>
    <div className="col-2">
    
      <button 
            type="button" 
            className={`${styles.spButton} btn btn-success`}
            onClick={handleSaveButtonClick}
            >
              <IoMdAdd/>
            </button>
    </div>
  </div>
  </div>
  )
}

export default AddToDo;