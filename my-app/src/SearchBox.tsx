import {Button, ButtonGroup, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useState} from "react";
export function SearchBox() {
 const [search, setSearch] = useState("");





return(
    <ButtonGroup  color="primary" aria-label="outlined primary button group">
        <Button disabled onClick={() => {
        }}><SearchIcon/></Button>
        <div>
            <TextField variant={"outlined"} color="primary" value={search}
                       placeholder={'search'} onChange={e => setSearch(e.target.value)}/>
        </div>
    </ButtonGroup>
)
}