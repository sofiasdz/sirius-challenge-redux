import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name: string, status: string, specie: string, gender: string, episodes: number, detail:string) {
    return { name, status, specie, gender, episodes,detail };
}

const rows = [
    createData('Rick', 'dead', 'human', 'male', 1.0,'cranky'),
    createData('Rick', 'dead', 'human', 'male', 1.0,'cranky'),
    createData('Rick', 'dead', 'human', 'male', 1.0,'cranky'),

];

export default function BasicTable() {
    const classes = useStyles();

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
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.specie}</TableCell>
                            <TableCell align="right">{row.gender}</TableCell>
                            <TableCell align="right">{row.episodes}</TableCell>
                            <TableCell align="right">{row.detail}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}