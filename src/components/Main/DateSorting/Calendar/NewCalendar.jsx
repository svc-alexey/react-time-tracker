import React, {useState} from "react";
import {Calendar} from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import './Calendar.scss'


const NewCalendar = () => {
    const [value, onChange] = useState(new Date());
    const formatShortWeekday = (locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
    const tileContent = (date, view) => {
        return (
            <span className={'meter'}></span>)
    }

    return (
        <Calendar
            onChange={onChange}
            value={value}
            locale={'en-EN'}
            formatShortWeekday={formatShortWeekday}
            tileContent={tileContent}
        />
    )
}

export default NewCalendar;

