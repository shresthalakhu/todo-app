import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import Todos from './Todos';

function App() {
  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([]);

 

  return (
    <div className="App">

       <TodoForm inputs={inputs} todos={todos} setTodos={setTodos} setInputs={setInputs} />
      <Todos setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
