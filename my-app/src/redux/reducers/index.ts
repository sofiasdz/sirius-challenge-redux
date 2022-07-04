import {combineReducers} from "redux"
import characterReducer from "./characterReducer"

const reducers= combineReducers({
    characterReducer,
});
export default reducers
export type State =ReturnType<typeof reducers>