import React from 'react';
import Todo from './Todo';

function Todos({ todos, setTodos}) {
    return (
        <div>
            <h1>Todos List</h1>
            <ul>
              
              {todos.map((todo) => (
                  <Todo
                   setTodos={setTodos}
                   todo={todo} 
                   key={todo.id} 
                   text={todo.text} />
              ))}
                
            </ul>
        </div>
    )
}

export default Todos
