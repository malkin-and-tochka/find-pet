import style from './petCardForm.module.css'
import dog from "../../../../assets/img/Dog.jpg";
import PetDescriptionForm from "./petDescriptionForm/petDescriptionForm";

const PetCardForm = (props) => {
    return (
        <div className={style.mainWrapper}>
            <div className={style.topInfo}>
                What you will get
            </div>
            <div className={style.cardWrapper}>
                <img className={style.fromForm} src={dog} alt=""/>
                <PetDescriptionForm feature={props.feature} description={props.description}/>
            </div>
        </div>
    )
}

export default PetCardForm