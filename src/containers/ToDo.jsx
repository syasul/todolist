import React, { useState } from 'react'

import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'

const ToDo = () => {
    const [todos, setTodos] = useState([])

    const handleClick = (todo) => {
        setTodos([...todos, todo])
        console.log(todos)
    }

    const wrapper = {
        width: '30rem',
        margin: 'auto',
        marginTop: '2rem',
        padding: '5rem',
        background: 'white',
        borderRadius: '15px',
        background: '#ACE2E1'

    }
    return (
        <div className="todo" style={wrapper}>
            <h2 className='title' style={{ textAlign: 'center' }}>To-Do List</h2>
            <ToDoForm handleClick={handleClick} />
            <ToDoList todo={todos} />
        </div>
    )
}

export default ToDo