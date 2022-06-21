import {request} from './API'



/*export function getCharaterData(postId: number): Promise<any> {
    return request({
        url: "/posts/posts/" + postId,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
}*/

export function getAllCharacterData(): Promise<any> {
    return request({
        url:"https://rickandmortyapi.com/api/character",
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
}
