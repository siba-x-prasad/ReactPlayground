import ToDoItem from "./ToDoItem";

const ToDoList = ({todoItems, onDeleteClick, onEditClick}) => {
  return (
    <>
       <ul className="list-group">
         {todoItems.map(item => <ToDoItem key = {item.todoDate} todoName = {item.todoName} 
         todoDate = {item.todoDate} onDeleteClick = {onDeleteClick} onEditClick = {onEditClick}/> )}
     </ul>
    </>
   )
}
export default ToDoList;