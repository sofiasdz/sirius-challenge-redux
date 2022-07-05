

import { Dispatch} from "redux"
import {getAllCharacterData} from "../../api/CharacterApi";
import {CHARACTER_REQUEST} from "../actions/action";


const charactersMiddleware = (dispatch:Dispatch, getState:any) => (next: any) => (action: any) => {
    next(action);
    switch (action.type) {
        case CHARACTER_REQUEST:
            getAllCharacterData(action.page)
                .then((res) => {
                    console.log(res)
                    dispatch(action.characters.characterResponse(res))
                })
                .catch((err) => {
                    dispatch(action.characters.characterError(err))

                })
            break;
        default:
    }
}

export default charactersMiddleware;
