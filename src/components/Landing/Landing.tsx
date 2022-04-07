import React from "react";
import s from "./Landing.module.css";
// import TravelTextMain from "./../../assets/img/TravelTextMain.png";
import TravelButton from "./../../assets/img/StartButton.png";
import {NavLink} from "react-router-dom";


const Landing = () => {
    // eslint-disable-next-line no-restricted-globals
    // let userScreenHeight = screen.height;

    return (
        <div className={`${s.landing} ${s.landing__background}`}>
            <div className={s.landing__column}>
                <div className={s.landing__UpperRow}>
                    <div className={s.landing__heading}>
                        <div className={`${s.heading__text} ${s.text__widthAdaptive} ${s.text__heightAdaptive}`}>
                            <div className={s.text__travel}>Путешествие</div>
                            <div className={s.text__redPlanet}>на красную планету</div>
                        </div>
                    </div>
                </div>
                <div className={s.landing__LowerRow}>
                    <div className={s.landing__startTravel}>
                        <NavLink to={"/"}>
                            <img src={TravelButton} alt=""
                                 className={s.startTravel__button}/>
                        </NavLink>

                    </div>
                </div>
            </div>
            <div className={s.landing__column}>

            </div>
            {/*<div className={s.landing__row}>*/}
            {/*    gg*/}
            {/*</div>*/}
        </div>
    )
}

export default Landing;