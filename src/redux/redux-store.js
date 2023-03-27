import {combineReducers} from "redux";
import postReduce from "./post-reduce";


let reducers = combineReducers({
    postDataWrapper:postReduce
})

export default reducers 