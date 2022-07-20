import {request} from './API'


export function getAllCharacterData(pageNumber:number): Promise<any> {
    return request({
        url:`https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
}

export function filterCharacterData(name:string): Promise<any> {
    return request({
        url:`https://rickandmortyapi.com/api/character/?name=${name}`,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
}
