import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

 export const MyTheme = createTheme({
    palette: {
        primary: {
            dark : 'rgba(10, 34, 45, 1)',
            main:  'rgba(10, 34, 45, 0.7)',
            light: 'rgba(196, 196, 196, 0.5)',
           contrastText:'rgba(255, 255, 255, 1)'


        },
        secondary: {
            main: 'rgba(0, 223, 221, 1)',
        },
    },
});