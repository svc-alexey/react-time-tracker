import React from 'react';
import s from './SyncIssue.module.css';


const SyncIssue = (props) => {
  return (
    <div className={s.issue}>
      <div className={s.indicator} style={{ backgroundColor: `${props.color}` }}></div>
      <div className={s.text}>
        <p>{props.label}</p>
        <p>{props.time}</p>
      </div>
    </div>
  );
}

export default SyncIssue;
