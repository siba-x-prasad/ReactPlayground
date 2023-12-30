import styles from './ToDoItem.module.css';
import { AiOutlineDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { useRef } from 'react';

function ToDoItem({todoName, todoDate, onDeleteClick, onEditClick}) {

const noOfClicks = useRef(0);

const onEditClickedLocal = () => {
  noOfClicks.current += 1;
  console.log("Edit Click Count for "+todoName+" Is "+noOfClicks.current);
  onEditClick
}

  return (
    <div className={`${styles.itemContainer}`}>
     <div className={`${styles.spRow} row`}>
    <div className="col-6">{todoName}</div>
    <div className="col-2">{todoDate}</div>
    <div className="col col-lg-2">
      <button 
        type="button" 
        className={`${styles.spButton} btn btn-danger`}
        onClick={() => onDeleteClick(todoName)}
        > <AiOutlineDelete/> </button>
    </div>
        <div className="col col-lg-2">
      <button 
          type="button" 
            className={`${styles.spButton} btn btn-success`}
          onClick={onEditClickedLocal}
          > <MdEdit/></button>
    </div>
  </div>
    </div>
    )
}

export default ToDoItem;