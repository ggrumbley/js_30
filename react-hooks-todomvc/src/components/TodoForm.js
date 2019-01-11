import React from 'react';
import useInputState from '../state/useInputState';

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <input
        type="text"
        className="new-todo"
        placeholder="Add todo"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
