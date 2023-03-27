import style from './screen.module.css'
import SearchRow from "./SearchRow/searchRow";
import PetCard from "./petCard/petCard";

const Screen = () => {
    return (
        <div className={style.screenWrapper}>
            <div className={style.mainScreen}>
                <SearchRow/>
                <PetCard/>
                <PetCard/>
            </div>
        </div>
    )
}

export default Screen