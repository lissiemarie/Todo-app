import React from "react";

import "./Todo.css"

const Todo = () => {
    return (
        <div className="Todo">
            <li className="todo-item">Hello</li>
            <button className="check">✔️</button>
            <button className="trash">✖️</button>
        </div>
    )
}

export default Todo;