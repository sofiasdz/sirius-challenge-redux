
import actions from "../actions"
import {getAllCharacterData} from "../../api/CharacterApi";
import {CHARACTER_REQUEST} from "../actions/action";


// @ts-ignore
const charactersMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case CHARACTER_REQUEST:
            getAllCharacterData(action.page)
                .then((res) => {
                    dispatch(actions.characters.characterResponse(res.results))
                })
                .catch((err) => {
                    dispatch(actions.characters.characterError(err))

                })
            break;
        default:
    }
}

export default charactersMiddleware;
