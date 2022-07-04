import React, {useEffect, useState} from 'react';
import '../App.css';
import {Box, Container,} from "@material-ui/core";
import BasicTable from "../components/Table";
import {SearchBox} from "../components/SearchBox";
import {CharacterType} from "../Types/Types";
import {ThemeProvider} from '@material-ui/core/styles';
import {MyTheme} from "../components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from '../resources/logo_alta_ 1 1.png'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from "./store"
import session from "./actions/action";
import {bindActionCreators, Dispatch} from "redux"
import {actionCreators, State} from "./index";


function App() {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [search, setSearch] = useState("");
    const dispatch =useDispatch()
    const {getCharacterError,getCharacterRequest,getCharacterResponse}= bindActionCreators(actionCreators,dispatch)
    const state= useSelector((state:State)=> state.characterReducer.characters)//state.characters(?


    useEffect(() => {
        dispatch(session.characterRequest(1)) //le tengo q mandar el numero de pagina
        //no estoy usando action creators
    }, [])

    return (
        <ThemeProvider theme={MyTheme}>
            <CssBaseline/>
            <Container>
                <Box component="span" m={1} style={{background: MyTheme.palette.primary.dark}}>
                    <div style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottom: "none",
                    }}>
                        <img style={{borderRadius: 200, height: 100, paddingLeft: 1150, paddingTop: 10}} src={logo}/>
                        <header style={{
                            textAlign: "center",
                            alignSelf: "center",
                            color: MyTheme.palette.secondary.main,
                            fontSize: 40,
                            padding: 20
                        }}>Rick and Morty Characters
                        </header>
                    </div>

                </Box>
                <Box style={{
                    padding: 20,
                    marginBottom: 10
                }} component="span" m={1}>
                    <SearchBox search={search} setSearch={setSearch}/>


                </Box>


                {
                    characters.length === 0 ? <></> :

                        <BasicTable data={characters} setCharacters={setCharacters} search={search}
                                    setSearch={setSearch}/>

                }


            </Container>


        </ThemeProvider>

    );
}

const AppWrapper = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)


export default AppWrapper;
