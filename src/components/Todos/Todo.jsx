import React from "react";
import '../../App.css'

export const Todo = ({ todo, index, deletedTodos, editTodos }) => {
  return (
    <div className='todo'>
      {todo.text}
      <div>
        <button className="delete-todo" onClick={() => deletedTodos(index)}>X</button>
        <button className="edit-todo" onClick={() => editTodos(index)}>Edit</button>
      </div>
    </div>
  );
}