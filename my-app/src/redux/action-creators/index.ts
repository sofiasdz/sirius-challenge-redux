import {CHARACTER_ERROR, CHARACTER_REQUEST, CHARACTER_RESPONSE} from "../actions/action";
import { Dispatch} from "redux"

 export const getCharacterRequest =()=>{
    return (dispatch:Dispatch) =>{
        dispatch( {
            type:CHARACTER_REQUEST,

        })

    }
}
export const getCharacterResponse =()=>{
    return (dispatch:Dispatch) =>{
        dispatch( {
            type:CHARACTER_RESPONSE,

        })

    }
}
export const getCharacterError =()=>{
    return (dispatch:Dispatch) =>{
        dispatch( {
            type:CHARACTER_ERROR,

        })

    }
}