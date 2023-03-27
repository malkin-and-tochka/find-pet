import style from './formAndResult.module.css'
import AdventFormWithMemo from "./adventForm/adventForm";
import PetCardForm from "./PetCardForm/petCardForm";
import {useState} from "react";

const FormAndResult = () => {

    let [descriptionState, setDescriptionState] = useState()
    let [featureState, setFeatureState] = useState()
    let [imgState, setImgState] = useState()
    return (
        <div className={style.formAndResult}>
            <AdventFormWithMemo setImgState={setImgState} description={descriptionState} feature={featureState} setFeatureState={setFeatureState} setDescriptionstate={setDescriptionState}/>
            <PetCardForm img={imgState}  feature={featureState} description={descriptionState}/>
        </div>
    )
}

export default FormAndResult