import React, {useState} from 'react'
import { Field } from './Field'
import './Month.css'

export const Month = ({dayOfMonth}) => {
    const [showPopup, setShowPopup] = useState(false)
    // const [fieldEvent, setFieldEvent] = useState('')
    const [currentId, setCurrentId] = useState('')
    // const [event, setEvent] = useState('')

    const countDaysOfEachMonth = []

    for (let index = 0; index < dayOfMonth.length; index++) {
        countDaysOfEachMonth.push(index)
    }

    // const handleSetEvent = React.useCallback((id) => {
    //     setShowPopup(true)
    //     setCurrentId(id)
    // }, [showPopup, currentId])

    return (
        <div className="month">
            {countDaysOfEachMonth.map((_, index) => 
                <Field
                    key={index}
                    id={index + 1}
                    day={index + 1} />)
            }
        </div>
    )
}