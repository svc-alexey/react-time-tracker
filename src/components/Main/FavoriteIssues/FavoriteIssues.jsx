import React from "react";
import s from './FavoriteIssues.module.css'
import {useSelector} from "react-redux";
import Issue from "../AllIssues/Issue/Issue";

const FavoriteIssues = (props) => {
    const issuesList = useSelector(state => state.issuesList.favoriteIssues);
    let issuesElements = issuesList.map(issue =>
        <Issue timeIssueFrom={issue.time.from} timeIssueBy={issue.time.by} label={issue.label} text={issue.name}
               timer={issue.timer} key={issue.id} id={issue.id}  isFavorite={true}/>)

    return (
        <div className={s.wrapper}>
            {issuesList.length === 0 ?
                <div>
                    <h1>There is no favorite issues yet</h1>
                    <div className={s.issues}>
                        <div className={s.newWorklog}>
                            <button className={s.appendWorklog}></button>
                            <p className={s.label}>NEW FAVORITE</p>
                        </div>
                    </div>
                </div>
                : null}
            {issuesElements}
        </div>
    )
}

export default FavoriteIssues;