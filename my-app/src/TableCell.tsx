import React, {useEffect, useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType, EpisodeType} from "./Types/Types";
import {getEpisodeData} from "./api/EpisodeApi";
import {TableCell} from "@material-ui/core";

type Props = {
    character: CharacterType
}
export  default function TableCellCharacter(props: Props) {
    const [episodeList, setEpisodeList]=useState<string[]>([]);



    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    function getEpisodes(episodes:string[]) {
        let episodeList: string[] = [];
       episodes.forEach((episode,i) =>{
            getEpisodeData(episode)
            .then((res) => {
                console.log(res)
                episodeList.push(`${res.episode} - ${res.name}`)
            })
            .catch((err) => {
                if (err.status === 401|| err.status===404)
                    console.log(err)

            })})
        setEpisodeList(episodeList)
        console.log(episodeList)

    }
    useEffect(() => {
        console.log(props.character)
        getEpisodes(props.character.episode)
    },[])

    return(
    <StyledTableRow key={props.character.id}>
        <StyledTableCell align="right">{props.character.name}</StyledTableCell>
        <StyledTableCell align="right">{props.character.status}</StyledTableCell>
        <StyledTableCell align="right">{props.character.species}</StyledTableCell>
        <StyledTableCell align="right">{props.character.gender}</StyledTableCell>
        <StyledTableCell align="right">{episodeList.join(", ")}</StyledTableCell>
        <StyledTableCell align="right">{props.character.type}</StyledTableCell>
    </StyledTableRow>

    )
}