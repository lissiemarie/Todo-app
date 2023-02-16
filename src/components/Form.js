import React from "react";

import "./Form.css"

export default function Form ({input, setInput, todo, setTodo})  {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodo([
            ...todo, { text: input, completed: false, id: Math.random() * 1000 }
        ]);
        setInput("");
    }

     return (
        <div className="Form">
            <form>
                <input onChange={inputTextHandler} type="text" placeholder="Add item here" value={input} className="todo-input"></input>
                <button onClick={submitTodoHandler} type="submit" className="todo-submit">➕</button>
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
            </form>
        </div>
     )
}