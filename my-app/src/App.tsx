import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Container} from "@material-ui/core";
import BasicTable from "./Table";
import {SearchBox} from "./SearchBox";
import {CharacterType} from "./Types/Types";
import {getAllCharacterData} from "./api/CharacterApi";


function App() {
    const [characters, setCharacters]=useState<CharacterType[]>([]);

    useEffect(() => {
        getAllCharacterData()
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
                <SearchBox></SearchBox>
            </Box>

            <div style={{ height: 400, width: '100%' }}>
                {
                    characters.length === 0 ? <></> :
                    <BasicTable data={characters}></BasicTable>
                }
            </div>
        </Container>
    </div>
  );
}

export default App;
