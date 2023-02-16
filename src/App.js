import React, { useState } from 'react';
import Form from "./components/Form";
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
        <div className='todo-list'>
          <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
