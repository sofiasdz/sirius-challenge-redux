import {CharacterType} from "../Types/Types";

const  getCharacterEpisodes = (characterEpisodes:[string]) => {

    const numberPattern = /\d+/g;
    const episodesList: any[] =[]
    characterEpisodes.forEach(function (value) {
    episodesList.concat(value.match( numberPattern ))
    });
    return episodesList

 }