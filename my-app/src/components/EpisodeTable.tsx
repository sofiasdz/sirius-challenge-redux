import React, {useEffect} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {MyTheme} from "./Theme";
import {useDispatch, useSelector} from "react-redux";
import actions from "../redux/actions";
import getCharacterEpisodes from "../utils/episodes.utils";
import {CharacterType} from "../Types/Types";


const useTableHeadStyles = makeStyles({
    table: {
        minWidth: 650,
        borderRadius: 10,


    },
    root: {
        borderRadius: 10,
        minWidth: 650,


    },

});


const useTableContainerStyles = makeStyles({

    root: {
        borderRadius: 10,
        color: MyTheme.palette.primary.dark,


    },
    body: {
        borderRadius: 10,
        color: MyTheme.palette.primary.dark,


    }
});

const useTableCellStyles = makeStyles({
    root: {
        borderBottom: "none"

    }
});

const useTitleTextStyles = makeStyles({
    root: {
        color: MyTheme.palette.primary.contrastText
    }
});


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: MyTheme.palette.primary.main,
        color: MyTheme.palette.secondary.main,
        fontSize: 18,
        width: 500,
        paddingTop: 20,
        height: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: "none"


    },
    body: {},

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {},
}))(TableRow);
type Props = {
    character: CharacterType,


}

const EpisodeTable = (props:Props) => {
    const {character}=props
    const classesTableHead = useTableHeadStyles();
    const classesTableContainer = useTableContainerStyles();
    const classesTableCell = useTableCellStyles();
    const classesTitleText = useTitleTextStyles();

    // @ts-ignore
    const dispatch = useDispatch()
    // @ts-ignore
    const status = useSelector((state) => state.episodes.status)
    // @ts-ignore
    const episodesState = useSelector((state) => state.episodes.episodes)


    useEffect(() => {
        const episodesList= getCharacterEpisodes(character.episode)
        dispatch(actions.episodes.episodeRequest(episodesList)) //le tengo q mandar el numero de pagina
    }, [])

    return (
        <TableContainer className={classesTableContainer.root} component={Paper}>
            <TableHead classes={{root: classesTableHead.root}}>
                <StyledTableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Code</StyledTableCell>
                    <StyledTableCell align="left">Air Date</StyledTableCell>
                </StyledTableRow>
            </TableHead>

            {episodesState.map((episode:any) => (
                <StyledTableRow key={episode.id}>
                    <TableCell classes={{root:classesTableCell.root}} align="left">
                        <text className={classesTitleText.root}>
                            {episode.name}
                        </text>
                    </TableCell>
                    <StyledTableCell align="left">
                        <text className={classesTitleText.root}>
                            {episode.code}
                        </text>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                        <text className={classesTitleText.root}>
                            {episode.airDate}
                        </text>
                    </StyledTableCell>
                </StyledTableRow>
                ))}




        </TableContainer>

    );

}

export default EpisodeTable;