import style from './searchRow.module.css'
import AddSvg from '../../../assets/img/imgOnComponent/AddSvg'
import {useState} from "react";

const SearchRow = () => {
    let [toogle, setToogle] = useState(true)
    const vieCategories = () => {
        setToogle(!toogle)
        const infoRow = document.getElementById("row")
        const addButton = document.getElementById("addButton")
        if (!toogle) {
            infoRow.style.borderRadius = '50px'
            infoRow.style.height = '60px'
            addButton.style.transform = null
        }
        if (toogle) {
            infoRow.style.borderRadius = '30px'
            infoRow.style.height = '200px'
            addButton.style.transform = 'rotate(45deg)'
        }
    }
    return (
        <div id={'row'} className={style.searchRow}>
            <div className={style.categoryAndInfoWrapper}>
                <div className={style.choosing}>
                    ВЫБРАННЫЕ КАТЕГОРИИ:
                </div>
                <div className="choosingCategory">

                </div>
                <button id={"addButton"} onClick={vieCategories} className={style.addCategory}>
                    <AddSvg/>
                </button>
            </div>
            <div className={style.newCategories}>
                {/*
                    здесь будут категории для выбора поиска
                    будет выглядеть как обычные палки с плюсиком
                    надо сделать в стейте объект с категориями, но это ещё потом
                */}
            </div>
        </div>
    )
}

export default SearchRow