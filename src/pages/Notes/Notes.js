import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './NotesList.css';
import uuid from 'react-uuid';
import Main from './Main';

const Notes = () => {
  const [todos, setTodos] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const addTodos = () => {
    const newTodos = {
      id: uuid(),
      finished: false,
      title: 'title',
      body: 'body of note',
    };

    setTodos([newTodos, ...todos]);
  };

  const deleteNote = (deletedNoteId) => {
    setTodos(todos.filter(({ id }) => id !== deletedNoteId));
  };

  const getActiveNote = () => {
    return todos.find(({ id }) => id === activeNote);
  };

  const onUpdatedNote = (updatedNote) => {
    const updatedAndSortedNote = todos.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setTodos(updatedAndSortedNote);
  };

  return (
    <div className="notes">
      <Sidebar
        setActiveNote={setActiveNote}
        activeNote={activeNote}
        deleteNote={deleteNote}
        addTodos={addTodos}
        todos={todos}
        getActiveNote={getActiveNote()}
      />
      <Main onUpdatedNote={onUpdatedNote} activeNote={getActiveNote()} />
    </div>
  );
};

export default Notes;
