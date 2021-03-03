import {combineReducers} from "redux";
import dateReducer from './dateReducer';
import issuesReducer from "./issuesReducer";
import syncReducer from "./syncReducer";
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
    date: dateReducer,
    issuesList: issuesReducer,
    sync: syncReducer,
    form: formReducer
})