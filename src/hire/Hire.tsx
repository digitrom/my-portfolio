import React from 'react'
import styleContainer from '../common/styles/Container.module.css'
import style from './Hire.module.css'
import Button from "../button/Button";


const Hire = () => {
    return (
        <div className={style.hireBlock}>
            <div className={`${style.hireContainer} ${styleContainer.container}`}>
                <h2>Looking into remote work options</h2>
                <Button title={'Hire me'}/>
            </div>
        </div>
    )
}

export default Hire