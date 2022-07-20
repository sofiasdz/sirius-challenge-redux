import {request} from "./API";

export function getEpisodeData(episodeLink: string): Promise<any> {
    return request({
        url: episodeLink,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    },
        "An error occurred in the getEpisodeData Request");
}