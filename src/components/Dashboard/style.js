/**
 * Dashboard styling in JSS
 * @param {*} theme 
 */
const style = (theme) => {
    return {
        root: {
            '&': {
                width: '100%'
            }
        },
        header: {
            '&': {
                color: theme.palette.grey[600],
                marginBottom: '10px'
            }
        },
        logoutBtnContainer: {
            '&': {
                marginLeft: 'auto'
            }
        }
    };
};

export default style;