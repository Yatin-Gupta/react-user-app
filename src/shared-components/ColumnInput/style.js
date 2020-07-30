/**
 * ColumnInput styling in JSS
 * @param {*} theme 
 */
const style = (theme) => {
    return {
        fieldBlock: {
            '&': {
                display: 'flex',
                flexDirection: 'column'
            }
        },
        mandatoryText: {
            '&': {
                color: '#f00'
            }
        },
        inputField: {
            '&': {
                padding: '10px',
                border: `2px solid ${theme.palette.grey[300]}`,
                borderRadius: '5px',
                marginTop: '10px'
            }
        }
    };
};

export default style;