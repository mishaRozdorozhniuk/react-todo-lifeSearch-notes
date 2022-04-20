import React from "react";
import './EditModal.css'

export const EditModal = ({setValueModal, valueModal, oldValueModal, replaceTodo, setShowModal}) => {

    const handleSubmit = e => {
      e.preventDefault();
      if (!valueModal) return;
      replaceTodo(valueModal)
      setValueModal("");
      setShowModal(false)
    };

    return (
        <div className="modal">
            <div className="modal__content">
                <div>
                    Edit value modal
                    <div className="cros" onClick={() => setShowModal(false)}>
                        <span className="cros-line"></span>
                        <span className="cros-line"></span>
                    </div>
                </div>
                <div className="modal__inner">
                    <p>
                       Change <span className="changed-text">"{oldValueModal.text.text}"</span> to
                    </p>
                    
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        value={valueModal}
                        onChange={e => setValueModal(e.target.value)} />
                        <button type="submit">Edit Text</button>
                    </form>
                </div>
            </div>
        </div>
    )
}