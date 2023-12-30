import { useContext } from "react";
import ToDoItem from "../components/ToDoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoListWithContext = ({ onDeleteClick, onEditClick}) => {

  const todoItemsContext = useContext(TodoItemsContext);
  console.log(`Items from Context :${todoItemsContext.length}`);

  return (
    <>
       <ul className="list-group">
         {todoItemsContext.map(item => <ToDoItem key = {item.todoDate} todoName = {item.todoName} 
         todoDate = {item.todoDate} onDeleteClick = {onDeleteClick} onEditClick = {onEditClick}/> )}
     </ul>
    </>
   )
}
export default TodoListWithContext;