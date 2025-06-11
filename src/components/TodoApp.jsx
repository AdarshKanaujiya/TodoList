import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addList = (item) => {
    if (item.trim() === '') return;
    setTodos([...todos, item]);
  };

  const deleteItem = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-app-container">
      <h2>To-Do App</h2>
      <TodoInput addList={addList} />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoList key={index} item={todo} index={index} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
