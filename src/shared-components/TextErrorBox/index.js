import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import style from './style';

const useStyles = makeStyles((theme) => (style(theme)));

/**
 * Shared component that can be utilized by multiple main components 
 * Error box that is used to show user error or backend/api errors. 
 * @param {*} props 
 */
function TextErrorBox(props) {
    const { error } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.errorBox}>
                <Typography variant="button" display="block" className={classes.error}>
                    {error}
                </Typography>
            </div>
        </React.Fragment>
    )
}

export default TextErrorBox;
