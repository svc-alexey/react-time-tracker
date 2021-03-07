import React, {useState} from "react";
import {Calendar} from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import './Calendar.scss'
import {useDispatch, useSelector} from "react-redux";
import {onChangeDate} from "../../../../store/reducers/dateReducer";


const NewCalendar = () => {
    const value = useSelector(state => state.date.today);
    const dispatch = useDispatch();
    let onChange = (value) => {
        dispatch(onChangeDate(value))
    }


    const formatShortWeekday = (locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]
    const tileContent = (date, view) => {
        return (
            <span className={'meter'}></span>)
    }

    return (
        <Calendar
            onClickDay={onChange}
            value={value}
            locale={'en-EN'}
            formatShortWeekday={formatShortWeekday}
            tileContent={tileContent}
        />
    )
}

export default NewCalendar;

