import {request} from './API'


export function getAllCharacterData(pageNumber:number): Promise<any> {
    return request({
        url:`https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
}
