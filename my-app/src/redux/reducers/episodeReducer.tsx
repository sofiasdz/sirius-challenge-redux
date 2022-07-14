import {EPISODE_ERROR, EPISODE_REQUEST, EPISODE_RESPONSE} from "../actions/episodes.action";


const initialState = {
    episodes:[],
    status:'',
    pageNumber:1,
};

const reducer = (state= initialState,action: {type: string, response:any,page:number }) =>{
    switch(action.type){
        case EPISODE_REQUEST:
            return  {... state,status: 'loading', pageNumber: action.page}
        case EPISODE_RESPONSE:
            return  {... state,status: 'idle', episodes: action.response}
        case EPISODE_ERROR:
            return  {... state,status: 'error'}
        default:
            return state
    }

}
export default reducer