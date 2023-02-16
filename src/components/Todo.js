import React from "react";

import "./Todo.css"

const Todo = ({text, todo, todos, setTodo}) => {
    const deleteHandler = () => {
        setTodo(todo.filter((el) => el.id !== todos.id));
    };

    const completeHandler = () => {
        setTodo(todo.map((item) => {
           if(item.id === todos.id) {
            return {...item, completed: !item.completed}
           }
           return item; 
        }) )
    };
    
    return (
        <div className="Todo">
            <li className={`todo-item ${todos.completed ? "completed" : ''}`}>{text}</li>
            <button className="check" onClick={completeHandler}>✔️</button>
            <button className="trash" onClick={deleteHandler}>✖️</button>
        </div>
    )
}

export default Todo;