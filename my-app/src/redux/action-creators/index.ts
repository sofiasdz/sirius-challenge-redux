import {CHARACTER_REQUEST} from "../actions/action";
import { Dispatch} from "redux"

 export const getCharacterRequest =()=>{
    return (dispatch:Dispatch) =>{
        dispatch( {
            type:CHARACTER_REQUEST,

        })

    }
}