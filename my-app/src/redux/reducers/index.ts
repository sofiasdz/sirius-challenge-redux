import {combineReducers} from "redux"
import characterReducer from "./characterReducer"

const reducers= combineReducers({
    character:characterReducer
});
export default reducers