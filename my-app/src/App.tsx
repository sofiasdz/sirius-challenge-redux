import React, {useEffect, useState} from 'react';

import './App.css';
import {
    Box,
    Container,
    createStyles,
    Grid,
    makeStyles,
    TableContainer,
    Theme
} from "@material-ui/core";
import BasicTable from "./Table";
import {SearchBox} from "./SearchBox";
import {CharacterType} from "./Types/Types";
import {getAllCharacterData} from "./api/CharacterApi";



function App() {
    const [characters, setCharacters]=useState<CharacterType[]>([]);
    const [search, setSearch] = useState("");


    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }),
    );

    useEffect(() => {
        getAllCharacterData(1)
            .then((res) => {
                setCharacters(res.results)
            })
            .catch((err) => {
                if (err.status === 401|| err.status===404)
                    console.log(err)

            })
    },[])
  return (
    <div >
        <Container >
            <Box component="span" m={1}>
                <header style={{
                    textAlign: "center",
                    alignSelf: "center",
                    fontSize:30,
                    padding:20
                }}>Rick and Morty Characters</header>
            </Box>
            <Box  style={{
                padding:20,
                marginBottom:10
            }}component="span" m={1}>
                <SearchBox search={search} setSearch={setSearch}></SearchBox>
            </Box>

            <div style={{ height: 400, width: '100%' }}>
                {
                    characters.length === 0 ? <></> :
                        <TableContainer>
                    <BasicTable data={characters}  setCharacters={setCharacters} search={search} setSearch={setSearch}></BasicTable>
                        </TableContainer>
                }
            </div>
        </Container>







    </div>
  );
}

export default App;
