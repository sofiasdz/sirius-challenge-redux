
import actions from "../actions"
import {EPISODE_REQUEST} from "../actions/episodes.action";
import {getEpisodeData} from "../../api/EpisodeApi";

// @ts-ignore
const episodesMiddleware = ({dispatch, getState}) => next => action => {
    next(action);
    switch (action.type) {
        case EPISODE_REQUEST:
            getEpisodeData(action.url)
                .then((res) => {
                    dispatch(actions.episodes.episodeResponse(res))
                })
                .catch((err) => {
                    dispatch(actions.episodes.episodeError(err))

                })
            break;
        default:
    }
}

export default episodesMiddleware;
