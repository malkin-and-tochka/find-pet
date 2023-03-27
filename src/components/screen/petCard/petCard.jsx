import style from './petCard.module.css'
import dog from '../../../assets/img/Dog.jpg'
import PetDescription from "./description/description";

const PetCard =(props)=>{
    return(
        <div className={style.cardWrapper}>
                <img src={dog} alt=""/>
            <div className={style.columnInfo}>
                <PetDescription/>
            </div>
        </div>
    )
}

export default PetCard