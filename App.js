import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import "./App.css";
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
          <div>
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;










