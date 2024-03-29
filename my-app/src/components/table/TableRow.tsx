import React, {useState} from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import {CharacterType} from "../../Types/Types";
import {Button, Dialog, DialogContent, DialogContentText, TableCell, TextField} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {MyTheme} from "../../config/Theme";
import ListIcon from '@material-ui/icons/List';
import EpisodeTable from "./EpisodeTable";
import {getEpisodeIdByCharacter} from "../../utils/episodes.utils";
import actions from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import CharacterDetail from "./CharacterDetail";


type Props = {
    character: CharacterType,

}

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
        flex: 1,
        width: 250,
        textOverflow: 'ellipsis',
        maxWidth: 250,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
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



const StyledDialogEpisodes = withStyles((theme) => ({
paper: {
    backgroundColor: MyTheme.palette.primary.dark,
    boxShadow: 'none',
    width: 800

    },


}))(Dialog);
const StyledDialogCharacter = withStyles((theme) => ({
    paper: {
        backgroundColor: MyTheme.palette.primary.dark,
        boxShadow: 'none',
        width: 450
    },


}))(Dialog);

const TableCharacterRow = (props: Props) => {
    const {character} = props

    const classesDialogContent = useDialogContentStyles();
    const classesTitleText = useTitleTextStyles();
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

    const onClick = () => {
        const episodesList = getEpisodeIdByCharacter(character.episode)
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
                <span>
                    {character.name}
                </span>
            </StyledTableCell>
            <StyledTableCell align="left">
                <span>
                    {character.status}
                </span>
            </StyledTableCell>
            <StyledTableCell align="left">
                <span>
                    {character.species}
                </span>
            </StyledTableCell>
            <StyledTableCell align="left">
                <span>
                    {character.gender}
                </span>
            </StyledTableCell>


            <LightTooltip disableFocusListener disableTouchListener title={character.episode.join(", ")}>

                <StyledTableCell align="left">
                    <span>
                        <td className={classesEllipsis.root}> {character.episode.join(", ")}
                        </td>
                    </span>
                </StyledTableCell>
            </LightTooltip>


            <StyledTableCell align="left">
                <span>
                    {character.type}
                </span>
            </StyledTableCell>
            <StyledTableCell align="left">
                <Button onClick={toggleModal}>
                    <VisibilityIcon className={classesTitleText.root}/>
                    <div>
                        <StyledDialogCharacter
                            open={open}
                            onClose={toggleModal}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            color={MyTheme.palette.primary.dark}


                        >
                            <DialogContent>
                                <DialogContentText classes={{
                                    root: classesDialogContent.root,

                                }}>
                                   <CharacterDetail character={character}/>

                                </DialogContentText>
                            </DialogContent>
                        </StyledDialogCharacter>
                    </div>

                </Button>
                <Button>
                    <ListIcon className={classesTitleText.root} onClick={onClick}/>

                    <StyledDialogEpisodes
                        open={openList}
                        onClose={toggleListModal}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        color={MyTheme.palette.primary.dark}

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

                                        <EpisodeTable episodes={episodesState}/>

                                }


                            </DialogContentText>
                        </DialogContent>

                    </StyledDialogEpisodes>

                </Button>
            </StyledTableCell>
        </StyledTableRow>


    )
}

export default TableCharacterRow