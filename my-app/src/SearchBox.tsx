import {Button, ButtonGroup, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React, {useState} from "react";
import {CharacterType} from "./Types/Types";
import {ThemeProvider} from "@material-ui/core/styles";
import {MyTheme} from "./Theme";

type Props = {
    search: string
    setSearch: any
}
export function SearchBox(props: Props) {






return(
    <ThemeProvider theme={MyTheme}>
    <ButtonGroup style={{marginBottom:20}}  color="primary" aria-label="outlined primary button group">
        <Button disabled onClick={() => {
        }}><SearchIcon style={{color:MyTheme.palette.secondary.main}} ></SearchIcon></Button>
        <div>
            <TextField variant={"outlined"} color='secondary' value={props.search}
                       placeholder={'search'} onChange={e => props.setSearch(e.target.value)}/>
        </div>
    </ButtonGroup>
    </ThemeProvider>
)
}