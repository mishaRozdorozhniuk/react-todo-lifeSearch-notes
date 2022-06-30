import React from 'react';
import './Main.css';

const Main = ({ bodyInfo, activeNote, inputInfo, onUpdatedNote }) => {
  const onEditField = (key, value) => {
    return onUpdatedNote({
      ...activeNote,
      id: activeNote.id,
      [key]: value,
    });
  };

  return (
    <main className="app-main">
      <div className="app-main-note-edit">
        <input
          value={inputInfo}
          onChange={(e) => onEditField('title', e.target.value)}
          type="text"
          autoFocus
        />
        <textarea
          value={bodyInfo}
          onChange={(e) => onEditField('body', e.target.value)}
          name=""
          id="body"
          cols="30"
          rows="10"
        />
      </div>
    </main>
  );
};

export default Main;
