import {CHARACTER_REQUEST} from "../actions/action";
import { Dispatch} from "redux"

 export const getCharacterRequest =()=>{
    return (dispatch:Dispatch<Action>) =>{
        dispatch( {
            type:CHARACTER_REQUEST,

        })

    }
}