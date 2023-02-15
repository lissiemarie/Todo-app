import React from 'react';
import Form from "./components/Form";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-do List</h1>
        <div className='todo-list'>
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
