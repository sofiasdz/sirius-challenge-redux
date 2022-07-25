


export const  getEpisodeIdByCharacter = (characterEpisodes:string[]) => {

    const episodesList: string[] =[]
    characterEpisodes.forEach(function (value) {

        const input=value.replace(/[^0-9 ]/g, "")
    episodesList.push(input)
    });

    return episodesList

 }


