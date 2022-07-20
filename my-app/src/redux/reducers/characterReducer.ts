import {
    CHARACTER_REQUEST,
    CHARACTER_RESPONSE,
    CHARACTER_ERROR,
} from "../actions/character.action";


const initialState = {
    characters:[],
    status:'',
    pageNumber:1,
    name:''
};

const reducer = (state= initialState,action: {type: string, response:any,pageNumber:number,name:string }) =>{
    switch(action.type){
        case CHARACTER_REQUEST:
            return  {... state,status: 'loading', pageNumber: action.pageNumber, name:action.name}
        case CHARACTER_RESPONSE:
            return  {... state,status: 'idle', characters: action.response}
        case CHARACTER_ERROR:
            return  {... state,status: 'error'}
        default:
            return state
    }

}
export default reducer