import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {EpisodeType} from "../Types/Types";
import Pagination from "@material-ui/lab/Pagination";
import {MyTheme} from "./Theme";
import {useDispatch, useSelector} from "react-redux";
import actions from "../redux/actions"

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

const usePainationStyles = makeStyles({

    root: {
        backgroundColor: MyTheme.palette.primary.dark,
        height: 50,
        '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
            backgroundColor: 'transparent',
            color: 'white',
            borderColor: MyTheme.palette.primary.main,
        },
    },
    ul: {
        height: 50,
        "& > *": {
            marginTop: 10
        },
        '& .Mui-selected': {
            backgroundColor: 'transparent',
            color: '#19D5C6',
            borderColor: '#19D5C6',

        },
        "& .MuiPaginationItem-icon": {
            color: MyTheme.palette.secondary.main,


        },
        "& .MuiPaginationItem-ellipsis": {
            color: MyTheme.palette.secondary.main,


        }


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

const useContainerStyles = makeStyles({

    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },

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


const EpisodeTable = () => {
    //const {data, setData}=[]
    const classesTableHead = useTableHeadStyles();
    const classesPagination = usePainationStyles();
    const classesTableContainer = useTableContainerStyles();
    const classesTableCell = useTableCellStyles();
    const classesTitleText = useTitleTextStyles();

    // @ts-ignore
    const pageNumber = useSelector(state => state.characters.pageNumber)
    const dispatch = useDispatch();


    const handleChange = (event: any, value: number) => {
        dispatch(actions.characters.characterRequest(value))
    };


    return (
        <TableContainer className={classesTableContainer.root} component={Paper}>
            <TableHead classes={{root: classesTableHead.root}}>
                <StyledTableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Code</StyledTableCell>
                    <StyledTableCell align="left">Air Date</StyledTableCell>
                </StyledTableRow>
            </TableHead>

            {data.map((episode) => (
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


            <Pagination classes={{root: classesPagination.root, ul: classesPagination.ul}} count={10} page={pageNumber}
                        variant={'outlined'} onChange={handleChange} size="large"/>

        </TableContainer>

    );

}

export default EpisodeTable;