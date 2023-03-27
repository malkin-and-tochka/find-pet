import style from './description.module.css'

const PetDescription = (props) => {
    return (
        <div className={style.column}>
            <div className={style.userInfo}>
            </div>
            <div className={style.distinguishingFeatures}>
                {props.feature}
            </div>
            <div className={style.description}>
            </div>
        </div>
    )
}

export default PetDescription