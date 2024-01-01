import React from "react";
import "../App.css";
import TodoListContext from '../contexts/TodoListContext';

const AddTodo = () => {
  const [inputValue, setInputValue] = React.useState("");
  const { addTodoItem } = React.useContext(TodoListContext);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        placeholder={"Type and add todo item"}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          addTodoItem(inputValue);
          setInputValue("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTodo;