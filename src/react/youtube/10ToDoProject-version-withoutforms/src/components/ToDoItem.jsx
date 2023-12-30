import styles from './ToDoItem.module.css';
import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

function ToDoItem({todoName, todoDate, onDeleteClick, onEditClick}) {
  return (
    <div className={`${styles.itemContainer} text-center`}>
     <div className={`${styles.spRow} row`}>
    <div className="col">{todoName}</div>
    <div className="col">{todoDate}</div>
    <div className="col-md-auto">
      <button 
        type="button" 
        className={`${styles.spButton} btn btn-danger`}
        onClick={() => onDeleteClick(todoName)}
        > <AiOutlineDelete/> </button>
    </div>
        <div className="col-md-auto">
      <button 
          type="button" 
            className={`${styles.spButton} btn btn-success`}
          onClick={onEditClick}
          > <MdEdit/></button>
    </div>
  </div>
    </div>
    )
}

export default ToDoItem;