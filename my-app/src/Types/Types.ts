
export type CharacterType = {
    id:string
    name:string
    status: string,
    species: string,
    gender:string,
    episode:string[]
    type:string,
    created:string,
    origin:Origin,
    location:Location,
    image:string


}

export type Origin = {
    name:string

}
export type Location = {
    name:string

}

export type EpisodeType = {
    name:string,
    episode: string,
    air_date: string,
    id: number,
}
