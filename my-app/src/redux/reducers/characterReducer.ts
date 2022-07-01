import {CharacterType} from "../../Types/Types";
import session, {
    CHARACTER_REQUEST,
    CHARACTER_RESPONSE,
    CHARACTER_ERROR,
} from "../actions/action";


const initialState = {
    characters:[]
};
const reducer = (state: CharacterType[],action: {type: string, response:any }) =>{
    switch(action.type){
        case "CHARACTER_REQUEST":
            return  {... state,status: 'loading'}
        case "CHARACTER_RESPONSE":
            return  {... state,status: 'idle'}
        case "CHARACTER_ERROR":
            return  {... state,status: 'error'}
        default:
            return state
    }

}
export default reducer