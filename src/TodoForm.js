import React from 'react';


const TodoForm = ({inputs, setInputs, setTodos, todos}) => {
   
    const todoChangeHandler = (e) => {
        setInputs(e.target.value)
    }
  
    const todoClickHandler = (e) => {
      e.preventDefault();
      setTodos([
          ...todos, {text: inputs, completed: false, id:Math.random() * 1000}

      ]);
      setInputs('');
     
    }
    return (
        <div>
            <h1>Todo App</h1>
            <form onClick={todoClickHandler}>
                <input type="text" onChange={todoChangeHandler} value={inputs}/>
                <button>ADD TODO</button>
                <div className="select">
                    <select>
                    <option value="all">ALL</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
          
        </div>
    )
}

export default TodoForm
