import React, {useState} from 'react';
import s from './Tracker.module.css';
import Sync from './Sync/Sync';
import {useSelector} from "react-redux";
import TimerNew from "./TimerNew/TimerNew";


const Tracker = () => {
    const [on, setOn] = useState(false);

    const menuOn = () => {
        setOn(true);
    }
    const menuOff = () => {
        setOn(false);
    }
    const syncIssuesList = useSelector(state => state.sync.syncIssues);

    return (
        <div className={s.tracking}>
            <div>
                <div className={s.header}>
                    <p>Time tracking</p>
                    <div>
                        <button className={s.buttonBurger} onMouseEnter={menuOn}>
                            <span className={s.burgerSpan}/></button>
                        {on && <ul className={s.burgerMenu} onMouseLeave={menuOff}>
                            <li>Jira Link</li>
                            <li>Duplicate</li>
                            <li>Add to favorite</li>
                            <li>Delete</li>
                        </ul>}
                    </div>
                </div>
            </div>
            <TimerNew/>
            <Sync syncIssuesList={syncIssuesList}/>
        </div>
    )
}

export default Tracker;
