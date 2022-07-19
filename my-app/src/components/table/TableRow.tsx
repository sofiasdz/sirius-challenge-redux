import React, {useState} from "react";
import {createStyles, makeStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType} from "../../Types/Types";
import {Button, Container, Dialog, DialogContent, DialogContentText, TableCell, TextField} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {MyTheme} from "../../config/Theme";
import ListIcon from '@material-ui/icons/List';
import EpisodeTable from "./EpisodeTable";
import {getEpisodeIdByCharacter} from "../../utils/episodes.utils";
import actions from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";


type Props = {
    character: CharacterType
}


const useFormStyles = makeStyles((theme: Theme) =>
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
const useDialogContentStyles = makeStyles({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingRight: 50,
        paddingLeft: 20,


    },
    input: {

        marginBottom: 60


    },
});


const useTitleTextStyles = makeStyles({
    root: {
        color: MyTheme.palette.primary.contrastText
    }
});

const useEllipsisTextStyles = makeStyles({
    root: {
        flex:1,
        width:250,
        textOverflow: 'ellipsis',
        maxWidth: 250,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }
});


const useDialogContainerStyles = makeStyles({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingRight: 60,
        paddingLeft: 130,
        paddingBottom: 5
    }
});

const useTextFieldStyles = makeStyles({
    root: {
        background: MyTheme.palette.primary.contrastText,
        borderRadius: 4,
        width: 350,


    }
});
const useImgStyles = makeStyles({
    root: {
        borderRadius: 200, height: 120,

    }
});

const useFormTextStyles = makeStyles({
    root: {
        color: MyTheme.palette.primary.contrastText,
        fontSize: 15
    }
});
const useLoadingStyles = makeStyles({

    root: {
        textAlign: "center",
        alignSelf: "center",
        color: MyTheme.palette.secondary.main,
        fontSize: 15,
        padding: 20,
    },

});
const useHeaderStyles = makeStyles({

    root: {
        textAlign: "center",
        alignSelf: "center",
        color: MyTheme.palette.secondary.main,
        fontSize: 30,
        padding: 20,
    },

});

const TableCellCharacter = (props: Props) => {
    const {character}=props
    const classesForm = useFormStyles();
    const classesDialogContent = useDialogContentStyles();
    const classesTextField = useTextFieldStyles();
    const classesTitleText = useTitleTextStyles();
    const classesDialogContainer = useDialogContainerStyles();
    const classesImg = useImgStyles();
    const classesFormText = useFormTextStyles();
    const classesEllipsis = useEllipsisTextStyles();
    const classesLoading = useLoadingStyles();
    const classesHeader = useHeaderStyles();


    const [open, setOpen] = useState(false);

    const [openList, setOpenList] = useState(false);

    // @ts-ignore
    const dispatch = useDispatch()
    // @ts-ignore
    const episodesState = useSelector((state) => state.episodes.episodes)
    // @ts-ignore
    const status = useSelector((state) => state.episodes.status)

    const onClick =()=>{
        const episodesList = getEpisodeIdByCharacter(character.episode)
        // const url = buildEpisodeUrl(episodesList)
        const url = `https://rickandmortyapi.com/api/episode/${episodesList.join(',')}`
        dispatch(actions.episodes.episodeRequest(url))
        toggleListModal()
    }


    const toggleModal = () => {
        setOpen(!open)
    }

    const toggleListModal = () => {
        setOpenList(!openList)
    }


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
            borderBottom: "none",
            color: MyTheme.palette.primary.contrastText

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

        <StyledTableRow key={character.id}>
            <StyledTableCell align="left">
                <text >
                    {character.name}
                </text>
            </StyledTableCell>
            <StyledTableCell align="left">
                <text>
                    {character.status}
                </text>
            </StyledTableCell>
            <StyledTableCell align="left">
                <text >
                    {character.species}
                </text>
            </StyledTableCell>
            <StyledTableCell align="left">
                <text >
                    {character.gender}
                </text>
            </StyledTableCell>


            <LightTooltip disableFocusListener disableTouchListener title={character.episode.join(", ")}>

                <StyledTableCell align="left">
                    <text>
                    <td className={classesEllipsis.root}> {character.episode.join(", ")}
                    </td>
                    </text>
                </StyledTableCell>
            </LightTooltip>


            <StyledTableCell align="left">
                <text>
                    {character.type}
                </text>
            </StyledTableCell>
            <StyledTableCell align="left">
                <Button onClick={toggleModal}>
                    <VisibilityIcon className={classesTitleText.root}/>
                    <div >
                        <Dialog
                            open={open}
                            onClose={toggleModal}
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
                                    root: classesDialogContent.root,

                                }}>
                                    <div className={classesDialogContainer.root}>
                                        <img className={classesImg.root} src={character.image}/>
                                    </div>


                                    <form  className={classesForm.root} noValidate
                                          autoComplete="off">

                                            <text
                                                className={classesFormText.root}>Name
                                            </text>

                                            <TextField id="standard-read-only-input"

                                                       defaultValue={character.name}
                                                       className={classesTextField.root}
                                                       inputProps={{readOnly: true}}
                                                       variant="outlined"


                                            />
                                            <text
                                                className={classesFormText.root}>Code
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={character.id}
                                                       className={classesTextField.root}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                            />
                                            <text className={classesFormText.root}>Air
                                                Date
                                            </text>
                                            <TextField id="standard-read-only-input"
                                                       defaultValue={character.created}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }} variant="outlined"
                                                       className={classesTextField.root}/>
                                            <text className={classesFormText.root}>Type
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={character.type}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                                       className={classesTextField.root}/>
                                            <text className={classesFormText.root}>Gender
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={character.gender}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                                       className={classesTextField.root}
                                            />
                                            <text className={classesFormText.root}>Origin
                                            </text>
                                            <TextField id="standard-read-only-input"

                                                       defaultValue={character.origin.name}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       className={classesTextField.root}
                                                       variant="outlined"
                                            />
                                            <text className={classesFormText.root}>Location
                                            </text>
                                            <TextField id="standard-read-only-input"
                                                       defaultValue={character.location.name}
                                                       InputProps={{
                                                           readOnly: true,
                                                       }}

                                                       variant="outlined"
                                                       className={classesTextField.root}/>



                                    </form>

                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </div>

                </Button>
                <Button>
                    <ListIcon className={classesTitleText.root} onClick={onClick}/>

                    <Dialog
                        open={openList}
                        onClose={toggleListModal}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        color={MyTheme.palette.primary.dark}

                        PaperProps={{
                            style: {
                                backgroundColor: MyTheme.palette.primary.dark,
                                boxShadow: 'none',
                                width:800

                            },
                        }}
                    >
                        <DialogContent>
                            <DialogContentText classes={{
                                root: classesDialogContent.root,

                            }}>
                                <header className={classesHeader.root}>Episode List of {character.name}</header>


                                {
                                    status === "loading" ? <div>
                                            <header className={classesLoading.root}>Loading...
                                            </header>
                                        </div> :

                                        <EpisodeTable episodes={episodesState} />

                                }


                            </DialogContentText>
                        </DialogContent>

                    </Dialog>

                </Button>
            </StyledTableCell>
        </StyledTableRow>


    )
}

export default TableCellCharacter