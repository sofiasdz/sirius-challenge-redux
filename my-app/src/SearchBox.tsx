import {Button, ButtonGroup, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from "react";
import {CharacterType} from "./Types/Types";
import {ThemeProvider} from "@material-ui/core/styles";
import {MyTheme} from "./Theme";
import classes from "*.module.css";
import makeStyles from "@material-ui/core/styles/makeStyles";

type Props = {
    search: string
    setSearch: any
}
const useStyles = makeStyles({
    input: {
        color: 'rgba(0, 223, 221, 1)',
        border:'rgba(0, 223, 221, 1)',
    },
   
});

export function SearchBox(props: Props) {
    const classes = useStyles();






return(
    <ThemeProvider theme={MyTheme}>
    <ButtonGroup style={{marginBottom:20}}  color="primary" aria-label="outlined primary button group">
        <Button disabled onClick={() => {
        }}><SearchIcon style={{color:MyTheme.palette.secondary.main}} ></SearchIcon></Button>
        <div>
            <TextField variant={"outlined"} color='secondary' value={props.search}
                       placeholder={'search'} onChange={e => props.setSearch(e.target.value)} inputProps={{ className: classes.input }}/>
        </div>
    </ButtonGroup>
    </ThemeProvider>
)
}