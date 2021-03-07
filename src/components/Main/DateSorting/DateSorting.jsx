import React, {useState} from 'react';
import s from './DateSorting.module.css';
import {NavLink} from 'react-router-dom';
import NewCalendar from "./Calendar/NewCalendar";
import calendarLogo from "../../../img/calendar.svg";
import {useSelector} from "react-redux";


const DateSorting = (props) => {
    const date = useSelector(state => state.date.day);
    const [onCalendar, setOnCalendar] = useState(false);

    return (
        <div className={s.dateSorting}>
            <div className={s.data}>
                <button className={s.changeData} onClick={() => {
                    setOnCalendar(!onCalendar)
                }}>{date}</button>
                <img src={calendarLogo} alt='calendar'/>
            </div>
            <div className={s.calendarWrapper}>
                {onCalendar ? <div onMouseLeave={() => {
                    setOnCalendar(!onCalendar)
                }}><NewCalendar/></div> : null}
            </div>
            <div>
                <NavLink to='/all' className={s.sorting} activeClassName={s.sortingActive}>All</NavLink>
                <NavLink to='favorite' className={s.sorting} activeClassName={s.sortingActive}>Favorites</NavLink>
            </div>
        </div>
    );
};

export default DateSorting;
