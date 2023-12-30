import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './TodoApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoAppWithContext from './withcontxt/TodoAppWithContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/* <ToDoAppWithContext /> */}
    <TodoApp/>
  </React.StrictMode>,
)
