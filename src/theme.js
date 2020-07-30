import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: blue[200],
        }
    },
});

export default theme;