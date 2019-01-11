import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodoState from './state/useTodoState';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm
          saveTodo={(todoText) => {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              addTodo(trimmedText);
            }
          }}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
        />
      </header>
    </div>
  );
};

export default App;
