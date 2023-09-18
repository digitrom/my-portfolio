import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Hire.module.css'
import Button from "../button/Button";
import Title from "../common/components/title/Title";


const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${style.hireContainer} ${styleContainer.container}`}>
             <Title title={'Looking into remote work options'}/>
                <Button title={'Hire me'}/>
            </div>
        </div>
    )
}

export default Hire