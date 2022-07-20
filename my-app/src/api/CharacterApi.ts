import {request} from './API'


export function getAllCharacterData(pageNumber:number): Promise<any> {
    return request({
        url:`https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    },
        "An error occurred in the getAllCharacterData Request"
        );
}

export function filterCharacterData(name:string): Promise<any> {
    return request({
        url:`https://rickandmortyapi.com/api/character/?name=${name}`,
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    },
        "An error occurred in the filterCharacterData Request");
}
