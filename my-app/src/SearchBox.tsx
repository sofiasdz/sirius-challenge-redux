import {Button, ButtonGroup, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useState} from "react";
import {CharacterType} from "./Types/Types";

type Props = {
    search: string
    setSearch: any
}
export function SearchBox(props: Props) {






return(
    <ButtonGroup style={{marginBottom:20}}  color="primary" aria-label="outlined primary button group">
        <Button disabled onClick={() => {
        }}><SearchIcon/></Button>
        <div>
            <TextField variant={"outlined"} color="primary" value={props.search}
                       placeholder={'search'} onChange={e => props.setSearch(e.target.value)}/>
        </div>
    </ButtonGroup>
)
}