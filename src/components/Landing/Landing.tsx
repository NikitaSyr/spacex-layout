import React from "react";
import s from "./Landing.module.css";
// import TravelTextMain from "./../../assets/img/TravelTextMain.png";
import TravelButton from "./../../assets/img/StartButton.png";
import {NavLink} from "react-router-dom";

interface BoxItemType {
    topText: string
    middleText: string
    bottomText: string
}

const Landing = () => {
    const BoxItem: React.FC<BoxItemType> = ({topText, middleText, bottomText}) => {
        return (
            <div className={s.box__item}>
                <div className={s.item__topText}>{topText}</div>
                <div className={s.item__middleText}>{middleText}</div>
                <div className={s.item__bottomText}>{bottomText}</div>
            </div>
        )
    }
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
                            <BoxItem topText={"мы"} middleText={"1"} bottomText={"на рынке"}/>
                        </div>
                        <div className={`${s.benefits__box} ${s.box__topRight}`}>
                            <BoxItem topText={"гарантируем"} middleText={"50%"} bottomText={"безопасность"}/>
                        </div>
                    </div>
                </div>
                <div className={s.landing__LowerRow}>
                    <div className={s.landing__benefits}>
                        <div className={`${s.benefits__box} ${s.box__bottomLeft}`}>
                            <div className={s.box__item}>
                                <div className={s.item__topText}>календарик за</div>
                                <div className={s.item__middleText}>
                                    <span>2001</span><span className={s.item__middleTextSmall}>г.</span>
                                </div>
                                <div className={s.item__bottomText}>в подарок</div>
                            </div>
                        </div>
                        <div className={`${s.benefits__box} ${s.box__bottomRight}`}>
                            <BoxItem topText={"путешествие"} middleText={"597"} bottomText={"дней"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;