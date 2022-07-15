export const EPISODE_REQUEST = 'EPISODE_REQUEST';
export const EPISODE_RESPONSE = 'EPISODE_RESPONSE';
export const EPISODE_ERROR = 'EPISODE_ERROR';

const episodes = {
    episodeRequest: (episodeUrl:string) => ({type: EPISODE_REQUEST,episodeUrl}),
    episodeResponse: (response:any[]) => ({type: EPISODE_RESPONSE, response}),
    episodeError: (error:string) => ({type: EPISODE_ERROR, error}),
}
export default episodes;