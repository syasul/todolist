import React from 'react'

const ToDoList = ({ todo }) => {
    return (
        <div >
            <ul>
                {todo.map((todo, index) => {
                    return (
                        <li key={index}>{todo}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoList