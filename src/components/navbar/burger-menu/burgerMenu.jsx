import style from './burgerMenu.module.css'
import {useState} from "react";

const BurgerMenu = (props) => {

    return (
        <div onClick={props.Toggle} className={props.toggle ? style.active : style.menuBtn}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default BurgerMenu;