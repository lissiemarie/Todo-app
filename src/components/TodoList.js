import React from "react";
import Todo from "./Todo";

import "./Todo.css"

export default function TodoList({todo, setTodo, filteredTodos}) {
    return (
        <div className="TodoList">
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todos => (
                        <Todo key={todos.id} text={todos.text} todos={todos} todo={todo} setTodo={setTodo}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}