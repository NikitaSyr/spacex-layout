import s from './Header.module.css';
import React from "react";
import {NavLink} from "react-router-dom";
import SpaceXLogo from "./../../../src/assets/img/SpaceXLogo.png"



const Header = () => {
    const classIsActiveReturner = (isActive: boolean) => {
        return isActive ? `${s.navbar__item} ${s.navbar__active}` : `${s.navbar__item}`
    }
    return (
        <header className={s.header}>
            <div className={s.header__row}>
                <div className={s.header__logo}>
                    <NavLink to={"/"} className={({isActive}) => {
                        return isActive ? `${s.logo__active}` : ""}}><img className={s.logo__mobile} src={SpaceXLogo} alt=""/></NavLink>
                </div>
                <div className={s.header__navbar}>
                    <div className={s.navbar}>
                        <NavLink to={"main"} className={({isActive}) => {
                            return classIsActiveReturner(isActive);}}>Главная</NavLink>
                        <NavLink to={"technology"} className={({isActive}) => {
                            return classIsActiveReturner(isActive);}}>Технология</NavLink>
                        <NavLink to={"schedule"} className={({isActive}) => {
                            return classIsActiveReturner(isActive);}}>График полетов</NavLink>
                        <NavLink to={"warranty"} className={({isActive}) => {
                            return classIsActiveReturner(isActive);}}>Гарантии</NavLink>
                        <NavLink to={"about"} className={({isActive}) => {
                            return classIsActiveReturner(isActive);}}>О компании</NavLink>
                        <NavLink to={"contacts"} className={({isActive}) => {
                            return classIsActiveReturner(isActive);}}>Контакты</NavLink>
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