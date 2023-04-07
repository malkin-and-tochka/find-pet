import style from './addAdvent.module.css'
import FormAndResult from "./formAndResult/formAndResult";

const AddAdvent = () => {
    return (
        <div className={style.screenWrapper}>
            <div className={style.mainScreen}>
                <div className={style.column}>
                    {/*<div className={style.topInfo}>*/}
                    {/*    Post your advent*/}
                    {/*</div>*/}
                    <FormAndResult/>
                </div>
            </div>
        </div>
    )
}

export default AddAdvent