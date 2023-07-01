import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer} ${styleContainer.container}`}>
                <h2>Roman Bobrovski</h2>
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