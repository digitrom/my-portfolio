import React from "react";
import style from './Main.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.greetings}>
                    <span>Hi there</span>
                    <h1>I'm Roman Bobrovski</h1>
                    <p> A frontend developer</p>
                </div>
                <div className={style.photo}>
                </div>
            </div>
        </div>
    );
}

export default Main;