import React, {useEffect} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {MyTheme} from "../../config/Theme";
import {EpisodeType} from "../../Types/Types";




const useTableHeadStyles = makeStyles({
    table: {
        minWidth: 50,
        borderRadius: 10,



    },
    root: {
        borderRadius: 10,
        minWidth: 50,


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
        width: 40,
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
    episodes: EpisodeType[],


}

const EpisodeTable = (props:Props) => {
    const {episodes}=props
    const classesTableHead = useTableHeadStyles();
    const classesTableContainer = useTableContainerStyles();
    const classesTableCell = useTableCellStyles();
    const classesTitleText = useTitleTextStyles();
    console.log(episodes)






    return (
        <TableContainer>
            <TableHead>
                <StyledTableRow>
                    <StyledTableCell  align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Code</StyledTableCell>
                    <StyledTableCell align="left">Air Date</StyledTableCell>
                </StyledTableRow>
            </TableHead>


            {episodes.map((episode:EpisodeType) => (
                <StyledTableRow key={episode.id}>
                    <TableCell  align="left">
                        <text className={classesTitleText.root}>
                            {episode.name}
                        </text>
                    </TableCell>
                    <StyledTableCell align="left">
                        <text className={classesTitleText.root}>
                            {episode.episode}
                        </text>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                        <text className={classesTitleText.root}>
                            {episode.air_date}
                        </text>
                    </StyledTableCell>
                </StyledTableRow>
                ))}




        </TableContainer>

    );

}

export default EpisodeTable;