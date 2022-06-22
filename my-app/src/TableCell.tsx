import React, {useEffect, useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType, EpisodeType} from "./Types/Types";
import {getEpisodeData} from "./api/EpisodeApi";
import {Button, TableCell, Typography} from "@material-ui/core";
import { Ellipsis,EllipsisMode } from "react-simple-ellipsis";
import Tooltip from '@material-ui/core/Tooltip';

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

    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0,0,0,0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }))(Tooltip);

    return(
    <StyledTableRow key={props.character.id}>
        <StyledTableCell align="right">{props.character.name}</StyledTableCell>
        <StyledTableCell align="right">{props.character.status}</StyledTableCell>
        <StyledTableCell align="right">{props.character.species}</StyledTableCell>
        <StyledTableCell align="right">{props.character.gender}</StyledTableCell>

        <LightTooltip  disableFocusListener disableTouchListener title={episodeList.join(", ")} >

        <StyledTableCell align="right">
            <Ellipsis
            ellipsis="..."
            label=""
            id={props.character.id}
            text={episodeList.join(", ")}
            limit={20}
            class="more"
            mode={EllipsisMode.After}/>
        </StyledTableCell>
        </LightTooltip>


        <StyledTableCell align="right" >{props.character.type}</StyledTableCell>
    </StyledTableRow>

    )
}