import { blueGrey } from '@material-ui/core/colors';

/**
 * Login styling in JSS
 * @param {*} theme 
 */
const style = (theme) => {
    return {
        loginCard: {
            '&': {
                minWidth: '200px',
                width: '35%',
                margin: '40px auto auto auto'
            }
        },
        fieldRow: {
            '&': {
                marginTop: '10px'
            }
        },
        loginCardFooter: {
            '&': {
                backgroundColor: blueGrey[50],
                height: '50px'
            }
        },
        loginBtn: {
            '&': {
                marginLeft: 'auto',
                marginRight: '10px',
                color: '#fff'
            }
        },
        alignCenter: {
            '&': {
                display: 'flex',
                justifyContent: 'center'
            }
        }

    };
};

export default style;