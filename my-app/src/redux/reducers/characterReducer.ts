import {CharacterType} from "../../Types/Types";
import session, {
    CHARACTER_REQUEST,
    CHARACTER_RESPONSE,
    CHARACTER_ERROR,
} from "../actions/action";


const initialState = {
    characters:[],
    status:'',
};
//El middleware no sabe a quien sobreescribir, eso lo hace el reducer!

const reducer = (state= initialState,action: {type: string, response:any }) =>{
    switch(action.type){
        case "CHARACTER_REQUEST":
            return  {... state,status: 'loading'}
        case "CHARACTER_RESPONSE":
            //setCharacters(res.results)
            return  {... state,status: 'idle',characters: action.response.result}
        case "CHARACTER_ERROR":
            return  {... state,status: 'error'}
        default:
            return state
    }

}
export default reducer