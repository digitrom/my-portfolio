import React from 'react';
import style from './Button.module.scss'


type ButtonPropsType = {
    title: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <div className={style.viewBtn}>
            <a>{props.title}</a>
        </div>
    );
};

export default Button;