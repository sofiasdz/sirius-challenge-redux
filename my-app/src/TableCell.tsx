import React, {useEffect, useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType, EpisodeType} from "./Types/Types";
import {getEpisodeData} from "./api/EpisodeApi";
import {Box, Button, TableCell, Typography} from "@material-ui/core";
import { Ellipsis,EllipsisMode } from "react-simple-ellipsis";
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
        let list: string[] = [];
       episodes.forEach((episode,i) => {
            getEpisodeData(episode)
            .then((res) => {
                list.push(`${res.episode} - ${res.name}`)
            })
            .catch((err) => {
                if (err.status === 401|| err.status===404)
                    console.log(err)

            })})
        setEpisodeList(list)
    }


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
        <StyledTableCell align="left">{props.character.name}</StyledTableCell>
        <StyledTableCell align="left">{props.character.status}</StyledTableCell>
        <StyledTableCell align="left">{props.character.species}</StyledTableCell>
        <StyledTableCell align="left">{props.character.gender}</StyledTableCell>

        <LightTooltip  disableFocusListener disableTouchListener title={episodeList.join(", ")} >

        <StyledTableCell align="left">
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


        <StyledTableCell align="left">{props.character.type}</StyledTableCell>
        <StyledTableCell align="left">
            <Button>
            <VisibilityIcon></VisibilityIcon>
            </Button>
        </StyledTableCell>
    </StyledTableRow>

    )
}