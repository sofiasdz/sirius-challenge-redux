import {request} from './API'



/*export function getCharaterData(postId: number): Promise<any> {
    return request({
        url: "/posts/posts/" + postId,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
}*/

export function getAllCharacterData(pageNumber:string): Promise<any> {
    return request({
        url:"https://rickandmortyapi.com/api/character/?page=",
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
}
