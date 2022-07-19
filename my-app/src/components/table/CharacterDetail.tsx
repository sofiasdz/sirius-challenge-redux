
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import {CharacterType, EpisodeType} from "../../Types/Types";
import {DialogContentText, TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {MyTheme} from "../../config/Theme";

const useFormTextStyles = makeStyles({
    root: {
        color: MyTheme.palette.primary.contrastText,
        fontSize: 15
    }
});
const useTextFieldStyles = makeStyles({
    root: {
        background: MyTheme.palette.primary.contrastText,
        borderRadius: 4,
        width: 350,
        pointerEvents: 'none'


    }
});
const useDialogContainerStyles = makeStyles({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingRight: 60,
        paddingLeft: 130,
        paddingBottom: 5
    }
});
const useFormStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: MyTheme.palette.primary.main,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',

            },
        },
    }),
);
const useImgStyles = makeStyles({
    root: {
        borderRadius: 200, height: 120,

    }
});
type Props = {
    character: CharacterType,


}

const CharacterDetail = (props:Props) => {
    const {character}=props
    const classesTextField = useTextFieldStyles();
    const classesDialogContainer = useDialogContainerStyles();
    const classesFormText = useFormTextStyles();
    const classesImg = useImgStyles();
    const classesForm = useFormStyles();






    return (
        <div>
        <div className={classesDialogContainer.root}>
        <img className={classesImg.root} src={character.image}/>
    </div>


    <form className={classesForm.root} noValidate
          autoComplete="off" >

        <text
            className={classesFormText.root}>Name
        </text>

        <TextField id="standard-read-only-input"

                   defaultValue={character.name}
                   className={classesTextField.root}
                   inputProps={{readOnly: true}}
                   variant="outlined"
        />
        <text
            className={classesFormText.root}>Code
        </text>
        <TextField id="standard-read-only-input"

                   defaultValue={character.id}
                   className={classesTextField.root}
                   InputProps={{
                       readOnly: true,
                   }}
                   variant="outlined"

        />
        <text className={classesFormText.root}>Air
            Date
        </text>
        <TextField id="standard-read-only-input"
                   defaultValue={character.created}
                   InputProps={{
                       readOnly: true,
                   }} variant="outlined"
                   className={classesTextField.root}/>
        <text className={classesFormText.root}>Type
        </text>
        <TextField id="standard-read-only-input"

                   defaultValue={character.type}
                   InputProps={{
                       readOnly: true,
                   }}

                   variant="outlined"
                   className={classesTextField.root}
        />
        <text className={classesFormText.root}>Gender
        </text>
        <TextField id="standard-read-only-input"

                   defaultValue={character.gender}
                   InputProps={{
                       readOnly: true,
                   }}

                   variant="outlined"
                   className={classesTextField.root}
        />
        <text className={classesFormText.root}>Origin
        </text>
        <TextField id="standard-read-only-input"

                   defaultValue={character.origin.name}
                   InputProps={{
                       readOnly: true,
                   }}

                   className={classesTextField.root}
                   variant="outlined"

        />
        <text className={classesFormText.root}>Location
        </text>
        <TextField id="standard-read-only-input"
                   defaultValue={character.location.name}
                   InputProps={{
                       readOnly: true,
                   }}

                   variant="outlined"
                   className={classesTextField.root}

        />


    </form>
        </div>

    );

}

export default CharacterDetail;




