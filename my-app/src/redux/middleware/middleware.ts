
import
    session
    , {CHARACTER_ERROR, CHARACTER_REQUEST, CHARACTER_RESPONSE} from "../actions/action"
import { Dispatch} from "redux"
import {getAllCharacterData} from "../../api/CharacterApi";


const sessionMiddleware = (dispatch:Dispatch,getState:any) => (next: (arg0: any) => void) => (action: { type: any, page:number}) => {
    next(action);
    switch (action.type) {
        case CHARACTER_REQUEST:
            getAllCharacterData(action.page)
                .then((res) => {
                    dispatch(session.characterResponse(res))
                })
                .catch((err) => {
                    dispatch(session.characterError(err))

                })
            break;
        case CHARACTER_RESPONSE:


            break;
        case CHARACTER_ERROR:
           // console.log(err)


            break;

        default:
    }
}

export default sessionMiddleware;
