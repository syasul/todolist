import React, { useState } from 'react'

const ToDoForm = ({ handleClick }) => {
    const [todo, setTodo] = useState("")

    return (
        <div style={{ textAlign: 'center' }}>
            <p>~ Today I need to ~</p>
            <span>
                <input value={todo} onChange={(e) => {
                    setTodo(e.target.value)
                }} />
                <button onClick={() => handleClick(todo)} style={{ marginLeft: '1rem' }}>Submit</button>
            </span>
        </div>
    )
}

export default ToDoForm