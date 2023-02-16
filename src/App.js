import React, { useState, useEffect } from 'react';
import Form from "./components/Form";
import TodoList from './components/TodoList';

import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
     if(localStorage.getItem('todo') ===null) {
      localStorage.setItem('todo', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todo'));
      setTodo(todoLocal);
    };
  }, []);

  
  useEffect(() => {
    switch(status){
      case 'completed':
        setFilteredTodos(todo.filter(todos => todos.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todo.filter(todos => todos.completed === false))
        break;
      default:
        setFilteredTodos(todo);
        break;
    };
      localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo, status]);


  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
        <div className='todo-list'>
          <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} setStatus={setStatus}/>
          <TodoList todo={todo} setTodo={setTodo} filteredTodos={filteredTodos}/>
        </div>
      </header>
    </div>
  );
}

export default App;
