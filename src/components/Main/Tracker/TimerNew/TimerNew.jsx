import React, {useEffect, useState} from 'react';
import s from './TimerNew.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../../../common/Forms/FormsControl";
import Stopwatch from "./Stopwatch/Stopwatch";
import TimeSlider from "../TimeSlider/TimeSlider";
import {useDispatch, useSelector} from "react-redux";
import {copyWorklog, submitForm} from "../../../../store/reducers/issuesReducer";

const TimerNew = (props) => {
        const [onTimer, setOnTimer] = useState(false);
        const [onSlider, setOnSlider] = useState(false);
        const [stopwatchTime, setStopwatchTime] = useState(0);
        const [sliderValue, setSliderValue] = useState([540, 690]);
        const dispatch = useDispatch();
        const initialLabel = useSelector(state => state.issuesList.initialLabel);
        const initialName = useSelector(state => state.issuesList.initialName);
        let initalValues = {
            label: initialLabel,
            issue: initialName
        }

        const toggleTimer = () => {
            setOnTimer(!onTimer);
        };

        const toggleSlider = () => {
            setOnSlider(!onSlider);
        };

        let onSubmitForm = (data) => {
            dispatch(submitForm(stopwatchTime, sliderValue, data.label, data.issue));
            dispatch(copyWorklog(null,null));
            setStopwatchTime(0);
            setSliderValue([540, 690]);
            toggleSlider();
            toggleTimer();
        }

        return (
            <div>
                {onTimer || initialLabel ? null :
                    <div className={s.newWorklog}>
                        <button className={s.appendWorklog} onClick={toggleTimer}/>
                        <p className={s.label}>NEW WORKLOG</p>
                    </div>}
                {onTimer || initialLabel ? <div className={s.timerOn}>
                    <IssueForm initialValues={initalValues}/>
                    <Stopwatch toggleSlider={toggleSlider} stopwatchTime={stopwatchTime}
                               setStopwatchTime={setStopwatchTime}/>
                    {onSlider ? <TimeSlider onSubmit={onSubmitForm} sliderValue={sliderValue}
                                            setSliderValue={setSliderValue}/> : null}
                </div> : null}
            </div>
        )
    }
;

let IssueForm = (props) => {
    return (
        <div>
            <form>
                <Field name={'label'} component={Input} placeholder={'New Label'}/>
                <Field name={'issue'} component={Input} placeholder={'New Issue'}/>
            </form>
        </div>
    )
}

IssueForm = reduxForm(
    {
        form: 'issueForm'
    }
)(IssueForm);

export default TimerNew;

