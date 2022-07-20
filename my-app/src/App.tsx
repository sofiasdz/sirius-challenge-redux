import React, {useEffect, useState} from 'react';
import './App.css';
import {Box, Container,} from "@material-ui/core";
import BasicTable from "./components/table/Table";
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {MyTheme} from "./config/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from './resources/logo_alta_ 1 1.png'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from "./redux/store"
import actions from "./redux/actions"
import SearchBox from "./components/SearchBox";

const useContainerStyles = makeStyles({

    root: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: "none",
    },

});
const useImgStyles = makeStyles({

    root: {
        borderRadius: 200,
        height: 100,
        paddingLeft: 1150,
        paddingTop: 10,
    },

});
const useHeaderStyles = makeStyles({

    root: {
        textAlign: "center",
        alignSelf: "center",
        color: MyTheme.palette.secondary.main,
        fontSize: 40,
        padding: 20,
    },

});
const useBoxStyles = makeStyles({

    root: {
        padding: 20,
        marginBottom: 10,

    },

});
const useLoadingStyles = makeStyles({

    root: {
        textAlign: "center",
        alignSelf: "center",
        color: MyTheme.palette.secondary.main,
        fontSize: 15,
        padding: 20,
    },

});

function App() {
    const classesContainer = useContainerStyles();
    const classesImg = useImgStyles();
    const classesHeader = useHeaderStyles();
    const classesBox = useBoxStyles();
    const classesLoading = useLoadingStyles();

    const [search, setSearch] = useState("");

    const dispatch = useDispatch()
    // @ts-ignore
    const status = useSelector((state) => state.characters.status)
    // @ts-ignore
    const charactersState = useSelector((state) => state.characters.characters)


    useEffect(() => {
        dispatch(actions.characters.characterRequest(1,"")) //le tengo q mandar el numero de pagina
    }, [])

   const handleSearchBoxChange=(search:string)=> {
        setSearch(search)
        dispatch(actions.characters.characterRequest(1,search)) //le tengo q mandar el name de la searchbox
    }
    return (
        <ThemeProvider theme={MyTheme}>
            <CssBaseline/>
            <Container>
                <Box component="span" m={1} style={{background: MyTheme.palette.primary.dark}}>
                    <div className={classesContainer.root}>
                        <img className={classesImg.root} src={logo}/>
                        <header className={classesHeader.root}>Rick and Morty Characters
                        </header>
                    </div>

                </Box>
                <Box className={classesBox.root} component="span" m={1}>
                    <SearchBox search={search} onChange={handleSearchBoxChange}/>
                </Box>


                {
                    status === "loading" ? <div>
                            <header className={classesLoading.root}>Loading...
                            </header>
                        </div> :

                        <BasicTable data={charactersState} search={search}/>

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
