import React, {useEffect, useState} from "react";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType, EpisodeType} from "./Types/Types";
import {getEpisodeData} from "./api/EpisodeApi";
import {
    Box,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TableCell,
    Typography
} from "@material-ui/core";
import { Ellipsis,EllipsisMode } from "react-simple-ellipsis";
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Select from 'react-select'
import Modal from "@material-ui/core/Modal";

type Props = {
    character: CharacterType
}
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);


export  default function TableCellCharacter(props: Props) {
    const [open, setOpen] = useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


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

/*    function getEpisodes(episodes:string[]) {
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
    }*/


    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0,0,0,0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }))(Tooltip);

    // @ts-ignore
    return(
    <StyledTableRow key={props.character.id}>
        <StyledTableCell align="left">{props.character.name}</StyledTableCell>
        <StyledTableCell align="left">{props.character.status}</StyledTableCell>
        <StyledTableCell align="left">{props.character.species}</StyledTableCell>
        <StyledTableCell align="left">{props.character.gender}</StyledTableCell>

        <LightTooltip  disableFocusListener disableTouchListener title={props.character.episode.join(", ")} >

        <StyledTableCell align="left">
            <Ellipsis
            ellipsis="..."
            label=""
            id={props.character.id}
            text={props.character.episode.join(", ")}
            limit={20}
            class="more"
            mode={EllipsisMode.After}/>
        </StyledTableCell>
        </LightTooltip>


        <StyledTableCell align="left">{props.character.type}</StyledTableCell>
        <StyledTableCell align="left">
            <Button onClick={handleOpen}>
            <VisibilityIcon></VisibilityIcon>
                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Let Google help apps determine location. This means sending anonymous location data to
                                Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Disagree
                            </Button>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Button>
        </StyledTableCell>
    </StyledTableRow>

    )
}