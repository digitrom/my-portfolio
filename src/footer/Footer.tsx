import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
               <Title title={'Roman Bobrovski'}/>
                <div className={style.socialNetwork}>
                    <img className={style.socialNetworkIcon} src="" alt=""/>
                    <img className={style.socialNetworkIcon} src="" alt=""/>
                    <img className={style.socialNetworkIcon} src="" alt=""/>
                    <img className={style.socialNetworkIcon} src="" alt=""/>
                </div>
                <h2>&copy; All Rights Reserved</h2>
            </div>
        </div>
    );
};

export default Footer;