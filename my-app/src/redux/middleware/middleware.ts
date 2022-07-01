
import {
    CHARACTER_REQUEST,
    CHARACTER_RESPONSE,
    CHARACTER_ERROR,
} from "../actions/action"


const sessionMiddleware = ({ dispatch:any, getState:any}) => next => action => {
    next(action);
    switch (action.type) {
        case CHARACTER_REQUEST:

            break;
        case CHARACTER_RESPONSE:


            break;
        case CHARACTER_ERROR:


            break;

        default:
    }
}

export default sessionMiddleware;
