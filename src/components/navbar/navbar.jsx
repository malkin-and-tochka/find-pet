import style from './navbar.module.css'
import Logo from "../../assets/img/imgOnComponent/logo";
import {NavLink} from "react-router-dom";
import BurgerMenu from "./burger-menu/burgerMenu";
import {useEffect, useState} from "react";
import './navbar.css'


const NavBar = () => {
    let wrapper
    useEffect(() => {
        wrapper = document.querySelectorAll('.iconWrapper')
    }, [])
    wrapper = document.querySelectorAll('.iconWrapper')
    const [toggle, setToggle] = useState(false)
    const Toggle = () => {
        setToggle(!toggle)
        if (toggle) {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].style.display = 'none'
            }
        } else {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].style.display = 'flex'
            }
        }
    }
    return (
        <div className={style.navbar}>
            <div className={style.iconsWrapperFromToggle}>
                <div>
                    <Logo/>
                </div>
                <div className={style.navLinks}>
                    <NavLink to='/profile'
                             className={`iconWrapper`}>
                        {/*<ProfileIcon/>*/}
                        <p>
                            PROFILE
                        </p>
                    </NavLink>
                    <NavLink to='/addAdvent' className={`iconWrapper`}>
                        {/*<AddAdventIcon/>*/}
                        ADD ADVENT
                    </NavLink>
                    <NavLink to='/mainScreen' className={`iconWrapper`}>
                        {/*<MainPage/>*/}
                        <div>
                            MAIN SCREEN
                        </div>
                    </NavLink>
                    <NavLink to='/mapTest' className={`iconWrapper`}>
                        {/*<MainPage/>*/}
                        <div>
                            MAP TEST
                        </div>
                    </NavLink>
                </div>

                <BurgerMenu Toggle={Toggle} toggle={toggle}/>
            </div>
        </div>
    )
}

export default NavBar