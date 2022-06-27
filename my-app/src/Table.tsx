import React, {useEffect} from 'react';
import {makeStyles, ThemeProvider, withStyles} from '@material-ui/core/styles';
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
import Modal from '@material-ui/core/Modal';
import {MyTheme} from "./Theme";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        borderRadius:10,
    },
    root:{
        borderRadius:10,


    }
});

const useStyles2 = makeStyles({

    root:{


        backgroundColor:MyTheme.palette.primary.dark,
        height:50


    },
    ul:{
        fontColor:MyTheme.palette.primary.contrastText,
        color:MyTheme.palette.primary.contrastText,
        height:50

    },

});


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: MyTheme.palette.primary.main,
        color:  MyTheme.palette.secondary.main,
        fontSize:18,
        width:500,
       paddingTop:20,
        height:5,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'



    },
    body: {
        fontSize: 14,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'


    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    head: {





    },
}))(TableRow);

type Props = {
    data: CharacterType[],
    setCharacters: any,
    search:string,
    setSearch:any,


}
export default function BasicTable(props: Props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [species, setSpecies] = useState("des");
    const [pageNumber, setPageNumber] = useState(1);





    const handleChange = (event:any, value:number) => {
        setPageNumber(value);
        getNewPage(value)
        console.log(value)

    };



    function getNewPage(pageNumber: number){
        getAllCharacterData(pageNumber)
            .then((res) => {
                props.setCharacters(res.results)

            })
            .catch((err) => {
                if (err.status === 401|| err.status===404)
                    console.log(err)

            })
    }

    return (
        <ThemeProvider theme={MyTheme}>
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableHead classes={{root:classes.root}} >
                    <StyledTableRow >
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                        <StyledTableCell align="left">
                            <div style={{ flexDirection: 'row', justifyContent: 'space-between',flex:1, }}>

                            {species === 'asd' ?
                                <Button color={"secondary"} onClick={
                                    ()=>{setSpecies('des')
                                        props.data.sort((a, b) => a.species.localeCompare(b.species))
                                    }}>
                                    <ArrowDownwardIcon/>
                                </Button>
                                :

                                <Button color={"secondary"} onClick={()=>{setSpecies('asd')
                                    props.data.sort((a, b) => a.species.localeCompare(b.species)).reverse() }}><ArrowUpwardIcon/></Button>
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
                <TableBody>
                    {props.data.filter(f=> f.name.toLowerCase().includes(props.search.toLowerCase()) || props.search === '')
                        .map((c) => (
                        <TableCellCharacter character={c}/>
                    ))}
                </TableBody>
            </Table>
            <Pagination classes={{root:classes2.root, ul:classes2.ul}} count={10} page={pageNumber} variant={'outlined'} onChange={handleChange} size="large" />
        </TableContainer>
        </ThemeProvider>
    );

}
