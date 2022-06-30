import React, {useState} from 'react'
import './Calendar.css'
import { PopupEvent } from './PopupEvent/PopupEvent'

import { Month } from './Month'

export const Calendar = React.memo(() => {
    const [showPopup, setShowPopup] = useState(false)
    const [fieldEvent, setFieldEvent] = useState('')

    let month = []
    let days = []

    const calenderInfo = {
        countOfMonth: new Array(12),
    }

    const [monthes, setMonthes] = useState({
        January: 31,
        February: 28,
        March: 31,
        April: 30 ,
        May: 31,
        June: 30, 
        July: 31,
        August: 31, 
        September: 30,
        October: 31, 
        November: 30,
        December: 31
    })

    for (let i = 0; i < calenderInfo.countOfMonth.length; i++) {
        month.push(i)
    }

    for (const [_, value] of Object.entries(monthes)) {
        days.push(value)
    }
    let arr = []

    days.map(el => {
        let d = new Array(el)
        arr.push(d)
    })

    console.log(fieldEvent);

    return (
        <section className="calendar">
            <button onClick={() => setShowPopup(!showPopup)}>add Event</button>
            {
                arr.map((m, i) => <Month dayOfMonth={m} key={i} />)
            }
            {
                showPopup && <PopupEvent 
                    setFieldEvent={setFieldEvent}
                    setShowPopup={setShowPopup}
                    fieldEvent={fieldEvent} /> 
            }
        </section>
    )
})