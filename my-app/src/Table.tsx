import React, {useEffect} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getAllCharacterData} from "./api/CharacterApi";
import {CharacterType} from "./Types/Types";
import { useState } from 'react';
import {getEpisodeData} from "./api/EpisodeApi";
import TableCellCharacter from "./TableCell";
import Select from 'react-select'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {Button} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

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

type Props = {
    data: CharacterType[],
    search:string,
    setSearch:any,


}
export default function BasicTable(props: Props) {
    const classes = useStyles();
    const [species, setSpecies] = useState("des");
    const [pageNumber, setPageNumber] = useState(1);




    const handleChange = (event:any, value:number) => {
        setPageNumber(value);
        handlePageNumber(value)
    };
    function handlePageNumber(page: number) {

        setPageNumber(pageNumber)
        getNewPage(pageNumber.toString())


    }

    function getNewPage(pageNumber: string){
        getAllCharacterData(pageNumber)
            .then((res) => {
                props.data=res.result
            })
            .catch((err) => {
                if (err.status === 401|| err.status===404)
                    console.log(err)

            })
    }

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                        <StyledTableCell align="left">
                            {species === 'asd' ?
                                <Button color={"secondary"} onClick={
                                    ()=>{setSpecies('des')
                                        props.data.sort((a, b) => a.species.localeCompare(b.species))
                                    }}>
                                    <ArrowDownwardIcon/>
                                </Button>:
                                <Button color={"secondary"} onClick={()=>{setSpecies('asd')
                                    props.data.sort((a, b) => a.species.localeCompare(b.species)).reverse() }}><ArrowUpwardIcon/></Button>}

                           Species
                        </StyledTableCell>
                        <StyledTableCell align="left">Gender</StyledTableCell>
                        <StyledTableCell align="left">Episodes</StyledTableCell>
                        <StyledTableCell align="left">Detail</StyledTableCell>
                        <StyledTableCell align="left"></StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {props.data.filter(f=> f.name.toLowerCase().includes(props.search.toLowerCase()) || props.search === '')
                        .map((c) => (
                        <TableCellCharacter character={c}/>
                    ))}
                </TableBody>
            </Table>
            <Pagination count={10} page={pageNumber} onChange={(event,value)=>handleChange(event,value)} size="large" />
        </TableContainer>
    );

}
