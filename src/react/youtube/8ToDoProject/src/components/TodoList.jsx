import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  return (
    <>
       <ul className="list-group">
         {props.todoItems.map(item => <ToDoItem key = {item.todoDate} todoName = {item.todoName} 
         todoDate = {item.todoDate}/> )}
     </ul>
    </>
   )
}
export default ToDoList;