import React from "react";
import "./App.css";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Provider from './contexts/Provider'

export default function TodoReducerApp() {
  return (
    <Provider>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}