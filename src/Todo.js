import React from 'react'

const Todo = ({text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    return (
        <div>
            {text}
            <button>Complete</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Todo
