import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from "@material-ui/core";
import BasicTable from "./Table";


function App() {
  return (
    <div >
        <Container maxWidth="sm">
            <header>Rick and Morty Characters</header>
            <BasicTable></BasicTable>
        </Container>
    </div>
  );
}

export default App;
