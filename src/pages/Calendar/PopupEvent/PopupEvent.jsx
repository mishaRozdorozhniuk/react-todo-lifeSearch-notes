import React from 'react'
import '../PopupEvent/PopupEvent.css'

export const PopupEvent = ({setFieldEvent, fieldEvent, setShowPopup}) => {

  const handleSubmit = e => {
      e.preventDefault();
      setFieldEvent("")
  }

  const popupClose = () => {
    setShowPopup(false)
  }

  return (
    <div className="popup">
        <form className="popup-content" onSubmit={handleSubmit}>
            <span type="button" className="popup-close" onClick={popupClose}>X</span>
            <input type="text" placeholder="add event" value={fieldEvent} onChange={(e) => setFieldEvent(e.target.value)} />
            <button type="submit">add</button>
        </form>
    </div>
  )
}
