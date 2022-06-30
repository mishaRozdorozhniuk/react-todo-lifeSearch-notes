import React from 'react';
import './NotesList.css';

const EditList = ({ todo: { id, title }, idx, edited, setEdited, setTodos }) => {
  const isEdited = edited === id;

  const handleChange = ({ target: { value } }) => {
    setTodos((prevState) =>
      prevState.map((item) => (item.id === id ? { ...item, title: value } : item)),
    );
  };

  const renderEditInputOrText = () => {
    return isEdited ? <input autoFocus value={title} onChange={handleChange} /> : title;
  };

  return (
    <div className="edit-item">
      <div className="edit-item-header">
        <button onClick={() => setEdited(isEdited ? false : id)}>
          {isEdited ? 'Save' : <span className="edit-icon">&#9998;</span>}
        </button>
      </div>
      <span className="note-text">{idx + 1}.</span>
      {renderEditInputOrText()}
    </div>
  );
};

export default EditList;
