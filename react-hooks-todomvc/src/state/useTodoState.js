import { useState } from 'react';

const useTodoState = (initialValue) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (todoText) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex) => {
      const newTodos = todos.filter((_, i) => i !== todoIndex);
      setTodos(newTodos);
    },
  };
};

export default useTodoState;
