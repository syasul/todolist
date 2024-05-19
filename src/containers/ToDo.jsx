import React, { useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { Button } from "@mui/material";

const ToDo = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: "menyapu", complete: false },
        { id: 2, task: "mengepel", complete: true }
    ]);

    const handleClick = (todo) => {
        const newTodo = {
            id: todos.length + 1,
            task: todo,
            complete: false
        };
        setTodos([...todos, newTodo]);
    };

    const handleCheckbox = (id) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((todo) => todo.id === id);
        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    };

    const handleDelete = () => {
        const newTodos = todos.filter((todo) => !todo.complete);
        setTodos(newTodos);
    };

    const removeCompleted = () => {
        const newTodos = todos.filter((todo) => !todo.complete);
        setTodos(newTodos);
    };

    return (
        <div className="todo">
            <h2 className="title">To-Do List</h2>
            <ToDoForm handleClick={handleClick} />
            <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
            <Button variant="outlined" color="error" onClick={removeCompleted}>Remove completed</Button>
        </div>
    );
};

export default ToDo;