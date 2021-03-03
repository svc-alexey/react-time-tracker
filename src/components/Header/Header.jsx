import React from 'react';
import s from "./Header.module.css";
import settings from '../../img/settings.svg';
import info from '../../img/info.svg';
import exit from '../../img/exit.svg';
import userPhoto from '../../img/photo.jpg';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <div className={s.container}>
                <div className={s.header}>
                    <nav className={s.headerNav}>
                        <NavLink exact to={'/'} className={s.headerLink}>Home</NavLink>
                        <NavLink exact to={'/'} className={s.headerLink}>Issues</NavLink>
                        <NavLink exact to={'/'} className={s.headerLink}>Filter</NavLink>
                        <NavLink exact to={'/'} className={s.headerLink}>Projects</NavLink>
                        <div className={s.line}></div>
                    </nav>
                    <div className={s.headerItem}>
                        <NavLink exact to={'/'} className={s.iconLink}> <img src={settings} alt='settings'/>
                        </NavLink>
                        <NavLink exact to={'/'} className={s.iconLink}> <img src={info} alt='info'/>
                        </NavLink>
                        <NavLink exact to={'/'} className={s.iconLink}> <img src={exit} alt='exit'/>
                        </NavLink>
                        <NavLink exact to={'/'} className={s.iconLink}> <img src={userPhoto} alt='userPhoto'
                                                                             className={s.headerUser}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
