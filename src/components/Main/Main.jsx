import React from 'react';
import s from './Main.module.css';
import Tracker from './Tracker/Tracker';
import AllIssueContainer from "./AllIssues/AllIssueContainer";
import DateSorting from "./DateSorting/DateSorting";
import FavoriteIssues from "./FavoriteIssues/FavoriteIssues";
import {Redirect, Route, Switch} from "react-router-dom";


const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.timeTracker}>
                    <div className={s.allIssues}>
                        <DateSorting/>
                        <Switch>
                            <Redirect exact from="/" to="/all"/>
                            <Route path='/all'>
                                <AllIssueContainer/>
                            </Route>
                            <Route path='/favorite'>
                                <FavoriteIssues/>
                            </Route>
                            <Route path={'*'}>
                                <div>404 not found</div>
                            </Route>
                        </Switch>
                    </div>
                    <Tracker/>
                </div>
            </div>
        </div>
    );
}

export default Main;
