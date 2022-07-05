import {
    CHARACTER_REQUEST,
    CHARACTER_RESPONSE,
    CHARACTER_ERROR,
} from "../actions/action";


const initialState = {
    characters:[],
    status:'',
    pageNumber:1,
};

const reducer = (state= initialState,action: {type: string, response:any,page:number }) =>{
    switch(action.type){
        case CHARACTER_REQUEST:
            return  {... state,status: 'loading', pageNumber: action.page}
        case CHARACTER_RESPONSE:
            return  {... state,status: 'idle', characters: action.response}
        case CHARACTER_ERROR:
            return  {... state,status: 'error'}
        default:
            return state
    }

}
export default reducer