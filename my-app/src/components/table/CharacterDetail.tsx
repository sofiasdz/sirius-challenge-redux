import React from 'react';
import {CharacterType} from "../../Types/Types";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {MyTheme} from "../../config/Theme";

const useFormTextStyles = makeStyles({
    root: {
        color: MyTheme.palette.primary.contrastText,
        fontSize: 15
    }
});

const useFormTextFieldStyles = makeStyles({
    root: {
        backgroundColor: MyTheme.palette.primary.contrastText,
        color: MyTheme.palette.primary.dark,
        fontSize: 15,
        width: 350,
        borderRadius: 4,
        padding: 10,


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

const CharacterDetail = (props: Props) => {
    const {character} = props
    const classesDialogContainer = useDialogContainerStyles();
    const classesFormText = useFormTextStyles();
    const classesFormTextField = useFormTextFieldStyles();
    const classesImg = useImgStyles();
    const classesForm = useFormStyles();


    return (
        <div>
            <div className={classesDialogContainer.root}>
                <img className={classesImg.root} src={character.image}/>
            </div>


            <form className={classesForm.root} noValidate
                  autoComplete="off">

                <text
                    className={classesFormText.root}>Name
                </text>

                <text
                    className={classesFormTextField.root}>{character.name}
                </text>
                <text
                    className={classesFormText.root}>Code
                </text>
                <text
                    className={classesFormTextField.root}>{character.id}
                </text>

                <text className={classesFormText.root}>Air
                    Date
                </text>
                <text
                    className={classesFormTextField.root}>{character.created}
                </text>
                <text className={classesFormText.root}>Type
                </text>
                <text
                    className={classesFormTextField.root}>{character.type}
                </text>
                <text className={classesFormText.root}>Gender
                </text>
                <text
                    className={classesFormTextField.root}>{character.gender}
                </text>
                <text className={classesFormText.root}>Origin
                </text>
                <text
                    className={classesFormTextField.root}>{character.origin.name}
                </text>
                <text className={classesFormText.root}>Location
                </text>
                <text
                    className={classesFormTextField.root}>{character.location.name}
                </text>

            </form>
        </div>

    );

}

export default CharacterDetail;




