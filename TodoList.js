import React from 'react'

const TodoList = ({todos, setTodos}) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return ( 
  <div>
    {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
            <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
        <div>
            
            <button className="button-delet task-button" onClick={() => handleDelete(todo)}>
                <i className="remove-button"></i>
            </button>
        </div>
        </li>
    ))}
  </div>
  )
  
}

export default TodoList