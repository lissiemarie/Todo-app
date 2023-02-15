import React from "react";

import "./Form.css"

export default function Form ()  {
     return (
        <div className="Form">
            <form>
                <input type="text" placeholder="Add item here" className="todo-input"></input>
                <input type="submit" value="Add" className="todo-submit"></input>
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
            </form>
        </div>
     )
}