import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Container} from "@material-ui/core";
import BasicTable from "./Table";
import {SearchBox} from "./SearchBox";


function App() {
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
            <BasicTable></BasicTable>
            </div>
        </Container>
    </div>
  );
}

export default App;
