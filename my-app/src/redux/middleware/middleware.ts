
import {
    CHARACTER_REQUEST,
    CHARACTER_RESPONSE,
    CHARACTER_ERROR,
} from "../actions/action"


const sessionMiddleware = () => (next: (arg0: any) => void) => (action: { type: any; }) => {
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
