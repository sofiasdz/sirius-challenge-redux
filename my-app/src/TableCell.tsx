import React, { useState} from "react";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType} from "./Types/Types";
import {
    Avatar,
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TableCell, TextField
} from "@material-ui/core";
import { Ellipsis,EllipsisMode } from "react-simple-ellipsis";
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
             /*   flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                paddingRight: 50,
                paddingLeft: 50,*/



            },
        },
    }),
);


export  default function TableCellCharacter(props: Props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

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
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Avatar alt="Remy Sharp" src={props.character.image}  />

                                <form className={classes.root} noValidate autoComplete="off">


                                    <TextField    id="standard-read-only-input"

                                                  defaultValue={props.character.name}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  label={"Name"}
                                                  variant="outlined"
                                    />
                                    <TextField    id="standard-read-only-input"

                                                  defaultValue={props.character.id}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  label={"Code"}
                                                  variant="outlined"
                                                />
                                    <TextField    id="standard-read-only-input"
                                                  defaultValue={props.character.created}
                                                  label={"Air Date"}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }} variant="outlined" />
                                    <TextField    id="standard-read-only-input"

                                                  defaultValue={props.character.type}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  label={"Type"}
                                                  variant="outlined" />

                                    <TextField    id="standard-read-only-input"

                                                  defaultValue={props.character.gender}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  label={"Gender"}
                                                  variant="outlined"
                                    />
                                    <TextField    id="standard-read-only-input"

                                                  defaultValue={props.character.origin.name}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  label={"Origin"}
                                                  variant="outlined"
                                    />
                                    <TextField    id="standard-read-only-input"
                                                  defaultValue={props.character.location.name}
                                                  InputProps={{
                                                      readOnly: true,
                                                  }}
                                                  label={"Location"}
                                                  variant="outlined" />




                                </form>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            </Button>
        </StyledTableCell>
    </StyledTableRow>

    )
}