import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {CharacterType} from "../../Types/Types";
import TableRowCharacter from "./TableRow";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {Button} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import {MyTheme} from "../../config/Theme";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../redux/actions"

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
    data: CharacterType[],
    search: string,

}
const BasicTable = (props: Props) => {
    const {search}=props
    const {data}=props
    const classesTableHead = useTableHeadStyles();
    const classesPagination = usePainationStyles();
    const classesTableContainer = useTableContainerStyles();
    const classesContainer = useContainerStyles();
    const [species, setSpecies] = useState("des");

    // @ts-ignore
    const pageNumber = useSelector(state => state.characters.pageNumber)
    const dispatch = useDispatch();


    const handleChange = (event: any, value: number) => {
        dispatch(actions.characters.characterRequest(value.toString(),""))
    };
    const sortHandler = (order: string) => {
        if (order == 'des') {
            setSpecies('des')
            data.sort((a, b) => a.species.localeCompare(b.species))
        } else {
            setSpecies('asd')
            data.sort((a, b) => a.species.localeCompare(b.species)).reverse()
        }
    };

    return (
        <TableContainer className={classesTableContainer.root} component={Paper}>

            <TableHead classes={{root: classesTableHead.root}}>
                <StyledTableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Status</StyledTableCell>
                    <StyledTableCell align="left">
                        <div className={classesContainer.root}>

                            {species === 'asd' ?
                                <Button color={"secondary"} onClick={() => sortHandler('des')}>
                                    Species<ArrowDownwardIcon/>
                                </Button>
                                :
                                <Button color={"secondary"} onClick={() => sortHandler('asd')}>Species<ArrowUpwardIcon/></Button>
                            }


                        </div>
                    </StyledTableCell>
                    <StyledTableCell align="left">Gender</StyledTableCell>
                    <StyledTableCell align="left">Episodes</StyledTableCell>
                    <StyledTableCell align="left">Detail</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                </StyledTableRow>
            </TableHead>

            {data.filter(character => character.name.toLowerCase().includes(search.toLowerCase()) || search === '')
                .map((c) => (

                    <TableRowCharacter key={c.id} character={c}/>

                ))}


            <Pagination classes={{root: classesPagination.root, ul: classesPagination.ul}} count={10} page={Number(pageNumber)}
                        variant={'outlined'} onChange={handleChange} size="large"/>

        </TableContainer>

    );

}

export default BasicTable;
