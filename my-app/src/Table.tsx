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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name: string, status: string, specie: string, gender: string, episodes: string, detail:string) {
    return { name, status, specie, gender, episodes,detail };
}




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
    setSearch:any

}
export default function BasicTable(props: Props) {
    const classes = useStyles();


    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                        <StyledTableCell align="left">Specie</StyledTableCell>
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
        </TableContainer>
    );

}
