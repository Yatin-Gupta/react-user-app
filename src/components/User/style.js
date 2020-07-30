/**
 * User styling in JSS
 * @param {*} theme 
 */
const style = (theme) => {
    return {
        largeAvatar: {
            '&': {
                width: theme.spacing(15),
                height: theme.spacing(15),
            }
        },
        root: {
            '&': {
                width: '300px',
                margin: '5% auto auto auto'
            }
        },
        alignCenter: {
            '&': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    };
};

export default style;