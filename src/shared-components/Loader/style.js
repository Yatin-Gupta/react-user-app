/**
 * Loader styling in JSS
 * @param {*} theme 
 */
const style = (theme) => {
    return {
        loaderContainer: {
            '&': {
                position: 'absolute',
                top: '0',
                right: '0',
                left: '0',
                width: 'auto',
                height: '100vh',
                backgroundColor: 'rgba(255,255,255,0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '100'
            }
        }
    };
};

export default style;