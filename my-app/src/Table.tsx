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


export default function BasicTable() {
    const [characters, setCharacters]=useState<any[]>([]);
    const classes = useStyles();

    function getCharacters() {
        getAllCharacterData()
            .then((res) => {
                console.log(res)
                setCharacters(res.results)
                console.log(res.results)
                console.log(res.results[0].name)
            })
            .catch((err) => {
                if (err.status === 401|| err.status===404)
                    console.log(err)

            })
    }
    useEffect(() => {
       getCharacters()
    })

    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Specie</StyledTableCell>
                        <StyledTableCell align="right">Gender</StyledTableCell>
                        <StyledTableCell align="right">Episodes</StyledTableCell>
                        <StyledTableCell align="right">detail</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {characters.map((character) => (
                        <StyledTableRow key={character.id}>
                            <StyledTableCell align="right">{character.name}</StyledTableCell>
                            <StyledTableCell align="right">{character.status}</StyledTableCell>
                            <StyledTableCell  align="right">{character.species}</StyledTableCell>
                            <StyledTableCell align="right">{character.gender}</StyledTableCell>
                            <StyledTableCell align="right" >{character.episode}</StyledTableCell>
                            <StyledTableCell align="right">{character.detail}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}
