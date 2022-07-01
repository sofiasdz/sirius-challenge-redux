import React, {useState} from "react";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType} from "../Types/Types";
import {Button, Dialog, DialogContent, DialogContentText, TableCell, TextField} from "@material-ui/core";
import {Ellipsis, EllipsisMode} from "react-simple-ellipsis";
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {MyTheme} from "./Theme";

type Props = {
    character: CharacterType
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: MyTheme.palette.primary.main,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',

            },
        },
    }),
);
const useStyles2 = makeStyles({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingRight: 50,
        paddingLeft: 10,


    },
    input: {

        marginBottom: 60


    },
});
const useStyles3 = makeStyles({
    root: {
        background: MyTheme.palette.primary.contrastText,
        borderRadius: 4,
        width: 350,


    }
});

export default function TableCellCharacter(props: Props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {

                backgroundColor: MyTheme.palette.primary.dark,
                fontColor: MyTheme.palette.primary.contrastText,
                borderBottom: "none",
                borderBottomLeftRadius: 30,
                borderTopLeftRadius: 30


            },
            '&:nth-of-type(even)': {
                backgroundColor: MyTheme.palette.primary.main,
                fontColor: MyTheme.palette.primary.contrastText,
                borderBottom: "none",
                borderBottomLeftRadius: 30,
                borderTopLeftRadius: 30


            },


        },


    }))(TableRow);

    const StyledTableCell = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {


                borderBottom: "none",


            },
            '&:nth-of-type(even)': {

                borderBottom: "none",


            },


        },


    }))(TableCell);


    const LightTooltip = withStyles((theme) => ({

        tooltip: {
            backgroundColor: 'white',
            color: 'rgba(0,0,0,0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 11,
        },
    }))(Tooltip);


    return (

        <StyledTableRow key={props.character.id}>
            <TableCell style={{borderBottom: "none"}} align="left">
                <text style={{color: MyTheme.palette.primary.contrastText}}>
                    {props.character.name}
                </text>
            </TableCell>
            <StyledTableCell align="left">
                <text style={{color: MyTheme.palette.primary.contrastText}}>
                    {props.character.status}
                </text>
            </StyledTableCell>
            <StyledTableCell align="left">
                <text style={{color: MyTheme.palette.primary.contrastText}}>
                    {props.character.species}
                </text>
            </StyledTableCell>
            <StyledTableCell align="left">
                <text style={{color: MyTheme.palette.primary.contrastText}}>
                    {props.character.gender}
                </text>
            </StyledTableCell>


            <LightTooltip disableFocusListener disableTouchListener title={props.character.episode.join(", ")}>

                <StyledTableCell align="left">
                    <text style={{color: MyTheme.palette.primary.contrastText}}>
                        <Ellipsis
                            ellipsis="..."
                            label=""
                            id={props.character.id}
                            text={props.character.episode.join(", ")}
                            limit={20}
                            class="more"
                            mode={EllipsisMode.After}/>
                    </text>
                </StyledTableCell>
            </LightTooltip>


            <StyledTableCell align="left">
                <text style={{color: MyTheme.palette.primary.contrastText}}>
                    {props.character.type}
                </text>
            </StyledTableCell>
            <TableCell style={{borderBottom: "none"}} align="left">
                <Button onClick={handleOpen}>
                    <VisibilityIcon style={{color: MyTheme.palette.primary.contrastText}}></VisibilityIcon>
                    <div color={MyTheme.palette.primary.dark}>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            color={MyTheme.palette.primary.dark}

                            PaperProps={{
                                style: {
                                    backgroundColor: MyTheme.palette.primary.dark,
                                    boxShadow: 'none',
                                    width: 450

                                },
                            }}
                        >
                            <DialogContent>
                                <DialogContentText classes={{
                                    root: classes2.root, // class name, e.g. `classes-nesting-root-x`

                                }}>
                                    <div style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        paddingRight: 60,
                                        paddingLeft: 130,
                                        paddingBottom: 5
                                    }}>
                                        <img style={{borderRadius: 200, height: 120}} src={props.character.image}></img>
                                    </div>


                                    <form color={MyTheme.palette.primary.dark} className={classes.root} noValidate
                                          autoComplete="off">
                                        <div style={{

                                            paddingLeft: 10,

                                        }}>
                                            <text
                                                style={{color: MyTheme.palette.primary.contrastText, fontSize: 15}}>Name
                                            </text>

                                            <TextField id="standard-read-only-input"

                                                       defaultValue={props.character.name}
                                                       className={classes3.root}
                                                       inputProps={{readOnly: true}}
                                                       variant="outlined"


                                            />
                                            <text
                                                style={{color: MyTheme.palette.primary.contrastText, fontSize: 15}}>Code
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={props.character.id}
                                                       className={classes3.root}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                            />
                                            <text
                                                style={{color: MyTheme.palette.primary.contrastText, fontSize: 15}}>Air
                                                Date
                                            </text>
                                            <TextField id="standard-read-only-input"
                                                       defaultValue={props.character.created}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }} variant="outlined"
                                                       className={classes3.root}/>
                                            <text
                                                style={{color: MyTheme.palette.primary.contrastText, fontSize: 15}}>Type
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={props.character.type}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                                       className={classes3.root}/>
                                            <text style={{
                                                color: MyTheme.palette.primary.contrastText,
                                                fontSize: 15
                                            }}>Gender
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={props.character.gender}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                                       className={classes3.root}
                                            />
                                            <text style={{
                                                color: MyTheme.palette.primary.contrastText,
                                                fontSize: 15
                                            }}>Origin
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={props.character.origin.name}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       className={classes3.root}
                                                       variant="outlined"
                                            />
                                            <text style={{
                                                color: MyTheme.palette.primary.contrastText,
                                                fontSize: 15
                                            }}>Location
                                            </text>
                                            <TextField id="standard-read-only-input"
                                                       defaultValue={props.character.location.name}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                                       className={classes3.root}/>


                                        </div>

                                    </form>

                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </div>
                </Button>
            </TableCell>
        </StyledTableRow>


    )
}