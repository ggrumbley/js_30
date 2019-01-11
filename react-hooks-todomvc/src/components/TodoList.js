import React from 'react';

const TodoList = ({ todos, deleteTodo }) => (
  <ul className="todo-list">
    {
      todos.map((todo, i) => (
        <li
          className="todo"
          key={i.toString()}
        >
          <div className="view">
            <input type="checkbox" className="toggle" />
            <label>{todo}</label>
            <button
              type="button"
              className="destroy"
              onClick={() => { deleteTodo(i); }}
            />
          </div>
        </li>
      ))
    }
  </ul>
);

export default TodoList;
