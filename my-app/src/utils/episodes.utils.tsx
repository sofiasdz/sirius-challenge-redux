import {CharacterType} from "../Types/Types";
import {stringify} from "querystring";


export const  getEpisodeIdByCharacter = (characterEpisodes:string[]) => {

    const numberPattern = /\d+/g;
    const episodesList: any[] =[]
    characterEpisodes.forEach(function (value) {
    episodesList.concat(value.match( numberPattern ))
    });
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

