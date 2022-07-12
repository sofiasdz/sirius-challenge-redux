import {Button, ButtonGroup, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {MyTheme} from "./Theme";
import makeStyles from "@material-ui/core/styles/makeStyles";

type Props = {
    search: string
    setSearch: any
}
const useTextFieldStyles = makeStyles({
    input: {
        fontSize: 20,
        color: 'rgba(0, 223, 221, 1)',
        border: 'rgba(0, 223, 221, 1)',


    },
    underline: {
        "&:before": {
            borderBottom: "2px solid rgba(0, 223, 221, 1)"
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
            borderBottom: "2px solid rgba(0, 223, 221, 1)"
        },
        "&:after": {
            borderBottom: "3px solid purple"
        }
    },
    disabled: {},
    focused: {},
    error: {}


});

const useButtonGroupStyles = makeStyles({
    root: {
        marginBottom: 20
    },


});
const useButtonStyles = makeStyles({
    root: {
        borderColor: MyTheme.palette.primary.dark
    },


});
const useSearchStyles = makeStyles({
    root: {
        color: MyTheme.palette.secondary.main
    },


});


const SearchBox = (props: Props) => {
    const {search,setSearch}=props
    const classesTextField = useTextFieldStyles();
    const classesButtonGroup= useButtonGroupStyles();
    const classesButton = useButtonStyles();
    const classesSearch = useSearchStyles();

    return (
        <ThemeProvider theme={MyTheme}>
            <ButtonGroup classes={{root:classesButtonGroup.root}}>
                <Button classes={{root:classesButton.root}} disabled onClick={() => {
                }}><SearchIcon classes={{root:classesSearch.root}}></SearchIcon></Button>

                <TextField variant={"standard"} color='secondary' value={search}
                           placeholder={'Search Character'} onChange={e => setSearch(e.target.value)}
                           InputProps={{classes: classesTextField}}/>

            </ButtonGroup>
        </ThemeProvider>
    )
}


export default SearchBox

