import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box, Container} from "@material-ui/core";
import BasicTable from "./Table";


function App() {
  return (
    <div >
        <Container >
            <Box component="span" m={1}>
                <header>Rick and Morty Characters</header>
            </Box>
            <div style={{ height: 400, width: '100%' }}>
            <BasicTable></BasicTable>
            </div>
        </Container>
    </div>
  );
}

export default App;
