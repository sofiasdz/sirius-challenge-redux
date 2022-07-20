import {combineReducers} from "redux"
import characterReducer from "./characterReducer"
import episodeReducer from "./episodeReducer";


const rootReducer = combineReducers({
    characters: characterReducer,
    episodes:episodeReducer,

});

export default rootReducer
