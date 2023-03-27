import style from './navbar.module.css'
import Logo from "../../assets/img/imgOnComponent/logo";
import ProfileIcon from "../../assets/img/imgOnComponent/ProfileIcon";
import AddAdventIcon from "../../assets/img/imgOnComponent/AddAdventIcon";
import {NavLink} from "react-router-dom";
import MainPage from "../../assets/img/imgOnComponent/MainPage";

const NavBar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                <Logo/>
            </div>
            <NavLink to='/profile' className={style.profileIcon && style.iconWrapper}>
                <ProfileIcon/>
                <div>
                    PROFILE
                </div>
            </NavLink>
            <NavLink to='/addAdvent' className={style.addEventIcon && style.iconWrapper}>
                <AddAdventIcon/>
                <div>
                    ADD ADVENT
                </div>
            </NavLink>
            <NavLink to='/mainScreen' className={style.addEventIcon && style.iconWrapper}>
                <MainPage/>
                <div>
                    MAIN SCREEN
                </div>
            </NavLink>
        </div>
    )
}

export default NavBar