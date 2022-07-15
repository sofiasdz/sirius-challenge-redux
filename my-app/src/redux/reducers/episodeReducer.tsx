import {EPISODE_ERROR, EPISODE_REQUEST, EPISODE_RESPONSE} from "../actions/episodes.action";


const initialState = {
    episodes:[],
    status:'',
    episodeUrl:''
};

const episodeReducer = (state= initialState,action: {type: string, response:any,episodeUrl:string,episodes:number[] }) =>{
    switch(action.type){
        case EPISODE_REQUEST:
            return  {... state,status: 'loading', url: action.episodeUrl}
        case EPISODE_RESPONSE:
            return  {... state,status: 'idle', episodes: action.response}
        case EPISODE_ERROR:
            return  {... state,status: 'error'}
        default:
            return state
    }

}
export default episodeReducer