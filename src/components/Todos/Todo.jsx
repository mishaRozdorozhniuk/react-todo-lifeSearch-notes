import React from 'react';
import '../../App.css';

export const Todo = ({ flag, handleActive, todo, index, deletedTodos, editTodos }) => {
  return (
    <div className={flag ? `${todo.className} todo` : 'todo'}>
      {todo.text}
      <div>
        <button className="delete-todo" onClick={() => deletedTodos(index)}>
          X
        </button>
        <button className="edit-todo" onClick={() => editTodos(index)}>
          Edit
        </button>
        <button className="active-todo" onClick={() => handleActive(index)}>
          active
        </button>
      </div>
    </div>
  );
};
