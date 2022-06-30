import React from 'react';
import './Field.css'

export const Field = React.memo(({day, onClick, id, event}) => {
    console.log(event);

    return (
        <div className="field" id={id}>
            <span>{day}</span> 
            <p>{event}</p>
        </div>
    )
})