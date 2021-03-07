import React from 'react';
import s from './AllIssues.module.css';
import upload from '../../../img/upload.svg';
import Issue from "./Issue/Issue";

const AllIssues = (props) => {

    let issuesElements = props.issuesList.map(issue => props.date === issue.date ?
        <Issue timeIssueFrom={issue.time.from} timeIssueBy={issue.time.by} label={issue.label} text={issue.name}
               timer={issue.timer} key={issue.id} id={issue.id} isFavorite={false}/> :
        <div>
            <h1>There is no issues yet</h1>
        </div>
    )

    return (
        <div className={s.thisDate}>
            <div className={s.now}>
                <div className={s.today}>{props.today}</div>
                <div className={s.todayTimer}>
                    <p>{props.todayTimer}</p>
                    <div className={s.meter}>
                        <span className={s.meterProgress}/>
                    </div>
                </div>
                <button className={s.uploadButton}>
                    <img src={upload} alt='upload'/>
                </button>
            </div>
            {issuesElements}
        </div>
    );
}

export default AllIssues;
