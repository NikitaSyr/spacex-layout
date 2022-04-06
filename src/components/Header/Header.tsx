import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import SpaceXLogo from "./../../../src/assets/img/SpaceXLogo.png"



const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <div className={s.header__logo}>
                    <img src={SpaceXLogo} alt=""/>
                </div>
                <div className={s.header__navbar}>
                    <div className={s.navbar}>
                        <NavLink to={"main"} className={s.navbar__item}>Главная</NavLink>
                        <NavLink to={"technology"} className={s.navbar__item}>Технология</NavLink>
                        <NavLink to={"schedule"} className={s.navbar__item}>График полетов</NavLink>
                        <NavLink to={"warranty"} className={s.navbar__item}>Гарантии</NavLink>
                        <NavLink to={"about"} className={s.navbar__item}>О компании</NavLink>
                        <NavLink to={"contacts"} className={s.navbar__item}>Контакты</NavLink>
                    </div>
                </div>
                {/*<div className={s.header__column}>*/}
                {/*        <NavLink to={'#/login'} className={s.header__button}>Log in</NavLink>*/}
                {/*</div>*/}
            </div>
        </header>
    )
}

export default Header;