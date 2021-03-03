import React, {useState} from 'react';
import s from './Issue.module.css';
import play from '../../../../img/play.svg';
import {useDispatch} from "react-redux";
import {copyWorklog, deleteWorklog} from "../../../../store/reducers/issuesReducer";

const Issue = (props) => {
    const [on, setOn] = useState(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const toggleOn = () => {
        setOn(true);
    }

    const toggleOff = () => {
        setOn(false);
    }

    const showBurger = () => {
        setShow(true);
    }
    const hideBurger = () => {
        setShow(false);
    }

    const deleteIssue = () => {
        dispatch(deleteWorklog(props.id,  props.isFavorite));
    }
    const copyIssues = () => {
        dispatch(copyWorklog(props.label, props.text));
    }

    return (
        <div className={s.issue} onMouseLeave={toggleOff}>
            <div className={on ? s.issueItemsActive : s.issueItems} onMouseEnter={toggleOn}>
                <div className={s.time}><strong>{props.timeIssueFrom}</strong> — {props.timeIssueBy}</div>
                <div className={s.indicatorComplite}></div>
                <div className={s.name}>
                    <p className={s.label}>{props.label}</p>
                    <p className={s.text}>{props.text}</p>
                </div>
                <div className={s.progress}>
                    <span className={s.progressComplite}></span>
                </div>
                <div className={s.timer}>
                    <p>{props.timer}</p>
                </div>
                <button className={s.playButton}>
                    <img src={play} alt='play'/>
                </button>
            </div>
            {on ? <div className={s.activeBar}>
                <button className={s.burger} onMouseEnter={showBurger}>
                    <span></span>
                    {show ? <ul className={s.burgerMenu} onMouseLeave={hideBurger}>
                        <li>Jira Link</li>
                        <li onClick={copyIssues}>Duplicate</li>
                        {props.isFavorite ? null :
                        <li>Add to favorite</li>}
                        <li onClick={deleteIssue}>Delete</li>
                    </ul> : null}
                </button>
            </div> : null}
        </div>
    );
}

export default Issue;
