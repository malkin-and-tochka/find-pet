import style from './petDescriptionForm.module.css'

const PetDescriptionForm =(props)=>{
    return(
        <div className={style.column &&  style.columnInfo}>
            <div className={style.userInfoRow}>
                <div className={style.adventInfo}>
                    <div>
                        {props.location || <span>Username</span>}
                    </div>
                    <div>
                        {props.data || <span>Data</span>}
                    </div>
                </div>
                <button className={style.respond}>
                    Respond
                </button>
            </div>
            <div className={style.distinguishingFeatures}>
                {props.feature}
            </div>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}

export default PetDescriptionForm