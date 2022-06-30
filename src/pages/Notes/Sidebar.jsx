import React from 'react';
import NoteC from './NoteC';
import './Sidebar.css';

const Sidebar = ({ setActiveNote, activeNote, addTodos, todos, deleteNote, getActiveNote }) => {
  return (
    <aside>
      <h1 className="sidebar-title">Notes</h1>
      <div></div>
      <button className="add-note-title" onClick={addTodos} type="button">
        add
      </button>
      {todos.map((todo, idx) => (
        <NoteC
          setActiveNote={setActiveNote}
          activeNote={activeNote}
          getActiveNote={getActiveNote}
          deleteNote={deleteNote}
          todo={todo}
          idx={idx}
          key={todo.id}
        />
      ))}
    </aside>
  );
};

export default Sidebar;
