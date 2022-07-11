import React, {useEffect, useState} from 'react';
import '../App.css';
import {Box, Container,} from "@material-ui/core";
import BasicTable from "../components/Table";
import {ThemeProvider} from '@material-ui/core/styles';
import {MyTheme} from "../components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from '../resources/logo_alta_ 1 1.png'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from "./store"
import actions from "./actions"
import SearchBox from "../components/SearchBox";


function App() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch()
    // @ts-ignore
    const status = useSelector((state)=> state.characters.status)
    // @ts-ignore
    const charactersState= useSelector((state)=> state.characters.characters)//state.characters(?




    useEffect(() => {
        dispatch(actions.characters.characterRequest(1)) //le tengo q mandar el numero de pagina
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
                   status==="loading" ? <div>   <header style={{
                           textAlign: "center",
                           alignSelf: "center",
                           color: MyTheme.palette.secondary.main,
                           fontSize: 15,
                           padding: 20
                       }}>Loading...
                       </header></div> :

                        <BasicTable data={charactersState}  search={search}/>

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
