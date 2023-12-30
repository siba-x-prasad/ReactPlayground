import styles from './AddTodoWithRef.module.css';
import { IoMdAdd } from "react-icons/io";
import { useRef } from 'react';

function AddTodoWithRef({ onNewItem }) {

  const nameRef = useRef('');
  const dateRef = useRef('');
   

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(nameRef.current.value, dateRef.current.value); 
    nameRef.current.value = "";
    dateRef.current.value = "";
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
            ref={nameRef}
            />
    </div>
    <div className="col-2">
      <input 
            className={styles.spInput} 
            type="date" 
            ref={dateRef}
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

export default AddTodoWithRef;
