import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Specie</TableCell>
                        <TableCell align="right">Gender</TableCell>
                        <TableCell align="right">Episodes</TableCell>
                        <TableCell align="right">detail</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {characters.map((character) => (
                        <TableRow key={character.id}>
                            <TableCell align="right">{character.name}</TableCell>
                            <TableCell align="right">{character.status}</TableCell>
                            <TableCell align="right">{character.species}</TableCell>
                            <TableCell align="right">{character.gender}</TableCell>
                            <TableCell align="right">{character.episode}</TableCell>
                            <TableCell align="right">{character.detail}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}
