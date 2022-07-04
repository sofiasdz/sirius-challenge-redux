import React, {useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {CharacterType} from "../Types/Types";
import TableCellCharacter from "./TableCell";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {Button} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import {MyTheme} from "./Theme";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../redux";
import session from "../redux/actions/action";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        borderRadius: 10,


    },
    root: {
        borderRadius: 10,
        minWidth: 650,


    },

});

const useStyles2 = makeStyles({

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
const useStyles3 = makeStyles({

    root: {
        borderRadius: 10,
        color: MyTheme.palette.primary.dark,


    },
    body: {
        borderRadius: 10,
        color: MyTheme.palette.primary.dark,


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
    data: CharacterType[],
    setCharacters: any,
    search: string,
    setSearch: any,


}
export default function BasicTable(props: Props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const [species, setSpecies] = useState("des");
    const [pageNumber, setPageNumber] = useState(1);
    const dispatch =useDispatch()
    const {getCharacterError,getCharacterRequest,getCharacterResponse}= bindActionCreators(actionCreators,dispatch)
    const state= useSelector((state:State)=> state.character)//state.characters(?


    const handleChange = (event: any, value: number) => {
        setPageNumber(value);
        dispatch(session.characterRequest()) //le tengo q mandar el numero de pagina
        //no estoy usando action creators


    };




    return (

        <TableContainer className={classes3.root} component={Paper}>

            <TableHead classes={{root: classes.root}}>
                <StyledTableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="left">Status</StyledTableCell>
                    <StyledTableCell align="left">
                        <div style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1,}}>

                            {species === 'asd' ?
                                <Button color={"secondary"} onClick={
                                    () => {
                                        setSpecies('des')
                                        props.data.sort((a, b) => a.species.localeCompare(b.species))
                                    }}>
                                    <ArrowDownwardIcon/>
                                </Button>
                                :

                                <Button color={"secondary"} onClick={() => {
                                    setSpecies('asd')
                                    props.data.sort((a, b) => a.species.localeCompare(b.species)).reverse()
                                }}><ArrowUpwardIcon/></Button>
                            }


                            <text>Species</text>

                        </div>
                    </StyledTableCell>
                    <StyledTableCell align="left">Gender</StyledTableCell>
                    <StyledTableCell align="left">Episodes</StyledTableCell>
                    <StyledTableCell align="left">Detail</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                </StyledTableRow>
            </TableHead>

            {props.data.filter(f => f.name.toLowerCase().includes(props.search.toLowerCase()) || props.search === '')
                .map((c) => (
                    <TableCellCharacter character={c}/>
                ))}


            <Pagination classes={{root: classes2.root, ul: classes2.ul}} count={10} page={pageNumber}
                        variant={'outlined'} onChange={handleChange} size="large"/>

        </TableContainer>

    );

}
