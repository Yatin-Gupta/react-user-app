import React from 'react';

import style from './style';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => (style(theme)));

/**
 * Shared component that can be utilized by multiple main components 
 * Input component that displays label and input field column wise
 * @param {*} props 
 */
function ColumnInput(props) {
    const classes = useStyles();
    const inputId = props.id;
    const inputLabel = props.label;
    const required = props.required;
    let inputClassStr = props.className ? `${props.className} ` : '';
    inputClassStr += classes.inputField;
    return (
        <React.Fragment>
            <div className={classes.fieldBlock}>
                <label id={inputId}>{inputLabel}
                    {required ? <span className={classes.mandatoryText}>*</span> : <React.Fragment />}</label>
                <input {...props} className={inputClassStr} />
            </div>
        </React.Fragment>
    )
}

export default ColumnInput;
