import React from "react";
import style from './Header.module.css';
import Navbar from "../nav/Navbar";

const Header = () => {
    return (
        <div className={style.header}>
            <Navbar/>
        </div>
    );
}

export default Header;