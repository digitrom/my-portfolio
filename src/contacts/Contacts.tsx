import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'
import Button from "../button/Button";
import Input from "../input/Input";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                    <form className={style.form}>
                        <Input placeholder={'Your name'}/>
                        <Input placeholder={'Your surname'}/>
                        <textarea className={style.textArea} name="" placeholder={'Your message'}> </textarea>
                    </form>
                <Button title={'Send'}/>
            </div>
        </div>
    );
};

export default Contacts;