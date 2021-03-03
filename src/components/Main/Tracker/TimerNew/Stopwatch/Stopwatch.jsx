import React, {useEffect, useState} from 'react';
import s from './Stopwatch.module.css';

const Stopwatch = (props) => {
    const [seconds, setSecond] = useState(0); // убрать отсюдова
    const [minutes, setMinute] = useState(0);
    const [hours, setHour] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                setSecond(counter);
                if (minutes === 60) {
                    setHour(hours + 1);
                    setMinute(0);
                }
                if (seconds === 60) {
                    setMinute(minutes + 1);
                    setSecond(0);
                    setCounter(0);
                }
                setCounter((counter) => counter + 1);
                props.setStopwatchTime(counter);
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    let stopwatchTime = {
        hours: (hours >= 10) ? hours : '0' + hours,
        minutes: (minutes >= 10) ? minutes : '0' + minutes,
        seconds: (seconds >= 10) ? seconds : '0' + seconds
    }

    return (
        <div className={s.container}>
            <div className={s.stopwatch}>
                {stopwatchTime.hours}:{stopwatchTime.minutes}:{stopwatchTime.seconds}
            </div>
            <div className={s.buttons}>
                <button className={`${s.button} ${s.stopBtn}`} onClick={props.toggleSlider}/>
                <button className={`${s.button} ${s.pauseBtn}`} onClick={() => {
                    setIsActive(!isActive)
                }}/>
            </div>
        </div>
    );
};

export default Stopwatch;
