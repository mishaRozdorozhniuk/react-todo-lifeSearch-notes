import React from 'react';
import './NoteC.css';

const NoteC = ({ getActiveNote, setActiveNote, activeNote, deleteNote, todo }) => {
  return (
    <div
      className={`note ${todo.id === activeNote && 'active-note'}`}
      onClick={() => setActiveNote(todo.id)}
    >
      <button onClick={() => deleteNote(todo.id)} className="delete-note">
        Delete
      </button>
      <div>{todo.title}</div>
      <span>{todo.body}</span>
    </div>
  );
};
export default NoteC;
