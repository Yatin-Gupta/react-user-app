import { red } from '@material-ui/core/colors';

const style = (theme) => {
    return {
        errorBox: {
            '&': {
                color: red[500],
                padding: '0 10px',
                wordWrap: 'normal',
                width: '100%',
                textAlign: 'center',
                boxSizing: 'border-box'
            }
        },
        error: {
            '&': {
                textTransform: 'uppercase'
            }
        }
    };
};

export default style;