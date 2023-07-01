import React from 'react';
import style from '../contacts/Contacts.module.css'

type InputType = {
    placeholder: string
    // value: string
    // callback: () => void
}

const Input = (props: InputType) => {
    return (
                <input
                    className={style.input}
                    type="text"
                    placeholder={props.placeholder}
                    // value={props.value}
                />
    );
};
export default Input;

