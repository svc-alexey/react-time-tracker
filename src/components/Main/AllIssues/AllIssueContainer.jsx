import React from 'react';
import {useSelector} from "react-redux";
import AllIssues from "./AllIssues";


const AllIssueContainer = () => {
    const today = useSelector(state => state.date.day);
    const time = useSelector(state => state.issuesList.timer);
    const issuesList = useSelector(state => state.issuesList.issues);
    const date = useSelector(state => state.date.todayParse);


    return (
    <AllIssues today={today} todayTimer={time} issuesList={issuesList} date={date}/>
)}
export default AllIssueContainer;

