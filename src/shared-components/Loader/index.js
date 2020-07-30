import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import style from './style';

const useStyles = makeStyles((theme) => style(theme));

/**
 * Shared component that can be utilized by multiple main components 
 * Loader that is used to indicate user to wait while page/component is loading.
 * It is takes full viewport width and height and shows circular rotating wheel in center.
 * @param {*} props 
 */
function Loader(props) {
    const classes = useStyles();
    const { showLoader } = props;
    if (showLoader) {
        return (
            <div className={classes.loaderContainer}>
                <CircularProgress />
            </div>
        );
    }
    return <React.Fragment />
}

export default Loader
