import {CharacterType} from "../Types/Types";
import {stringify} from "querystring";


export const  getEpisodeIdByCharacter = (characterEpisodes:string[]) => {

    const episodesList: string[] =[]
    characterEpisodes.forEach(function (value) {
        console.log(value)
        const input=value.replace(/[^0-9 ]/g, "")
        console.log(input)
    episodesList.push(input)
    });
    console.log(episodesList)
    return episodesList

 }

/*
 export const  buildEpisodeUrl = (episodesList:number[]) => {
    const url="https://rickandmortyapi.com/api/episode/"
     episodesList.forEach(function (value) {
         if(episodesList.indexOf(value)===(0| episodesList.length)){
             url.concat(value.toString())
         }
         else{
             url.concat(",")
             url.concat(value.toString())
         }
     })
     return url;
 }
*/

