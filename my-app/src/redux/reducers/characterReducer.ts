import {CharacterType} from "../../Types/Types";
import {Action} from "../actions/action";

const initialState = 0;
const reducer = (state: CharacterType[],action:Action) =>{
    switch(action.type){
        case "GET_CHARACTERS":
            return  action.payload
        default:
            return state
    }

}
export default reducer