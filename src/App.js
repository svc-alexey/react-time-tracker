import React from 'react';
import s from "./App.css";
import Header from './components/Header/Header'
import Main from './components/Main/Main';

const App = () => {
    return (
            <div className={s.wrapper}>
                <Header/>
                <Main/>
            </div>
    );
}

export default App;
