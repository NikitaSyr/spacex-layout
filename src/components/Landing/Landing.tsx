import React from "react";
import s from "./Landing.module.css";
import TravelButton from "./../../assets/img/StartButton.png";
import {NavLink} from "react-router-dom";

const Landing = () => {
    return (
        <div className={`${s.landing} ${s.landing__background}`}>
            <div className={s.landing__column}>
                <div className={s.landing__UpperRow}>
                    <div className={s.landing__heading}>
                        <div className={`${s.heading__text} ${s.text__widthAdaptive}`}>
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
                <div className={s.landing__UpperRow}>
                    <div className={s.landing__benefits}>
                        <div className={`${s.benefits__box} ${s.box__topLeft}`}>
                            <div className={s.box__item}>
                                <div className={`${s.item__topText} ${s.item__leftGradient}`}>мы</div>
                                <div className={`${s.item__middleText} ${s.item__leftGradient}`}>1</div>
                                <div className={`${s.item__bottomText} ${s.item__leftGradient}`}>на рынке</div>
                            </div>
                        </div>
                        <div className={`${s.benefits__box} ${s.box__topRight}`}>
                            <div className={s.box__item}>
                                <div className={`${s.item__topText} ${s.item__rightGradient}`}>гарантируем</div>
                                <div className={`${s.item__middleText} ${s.item__rightGradient}`}>50%</div>
                                <div className={`${s.item__bottomText} ${s.item__rightGradient}`}>безопасность</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.landing__LowerRow}>
                    <div className={s.landing__benefits}>
                        <div className={`${s.benefits__box} ${s.box__bottomLeft}`}>
                            <div className={s.box__item}>
                                <div className={`${s.item__topText} ${s.item__leftGradient}`}>календарик за</div>
                                <div className={`${s.item__middleText} ${s.item__leftGradient}`}>
                                    2001<span className={s.item__middleTextSmall}>г.</span>
                                </div>
                                <div className={`${s.item__bottomText} ${s.item__leftGradient}`}>в подарок</div>
                            </div>
                        </div>
                        <div className={`${s.benefits__box} ${s.box__bottomRight}`}>
                            <div className={s.box__item}>
                                <div className={`${s.item__topText} ${s.item__rightGradient}`}>путешествие</div>
                                <div className={`${s.item__middleText} ${s.item__rightGradient}`}>597</div>
                                <div className={`${s.item__bottomText} ${s.item__rightGradient}`}>дней</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;