import React, {useState} from 'react';
import s from './Sync.module.css';
import calendarLogo from '../../../../img/calendar.svg';
import SyncIssue from '../SyncIssue/SyncIssue';


const Sync = (props) => {
    let syncIssuesElements = props.syncIssuesList.map(issues => <SyncIssue color={issues.color} label={issues.label} time={issues.time} key={issues.id} id={issues.id}/>);

    const [on, setOn] = useState(false);

    const sync = () => {
        setOn(!on)
    }

  return (
    <div className={s.sync}>
      <div className={s.items}>
        <div className={s.header}>
          Google calendar sync
        </div>
        <button className={on ? s.switchBtnActive : s.switchBtn} onClick={sync}></button>
        <img src={calendarLogo} alt='calendar'></img>
      </div>
      <div className={s.issues}>
          {on ? syncIssuesElements : false}
      </div>
    </div >
  );
}

export default Sync;
