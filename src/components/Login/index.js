import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ColumnInput from '../../shared-components/ColumnInput';

import style from './style';
import { makeStyles } from '@material-ui/core/styles';
import TextErrorBox from '../../shared-components/TextErrorBox';
import Loader from '../../shared-components/Loader';

import model from './model';
import utils from '../utils';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => (style(theme)));

/**
 * Login Component
 * @param {*} props 
 */
function Login(props) {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const { history, location } = props;
    let errorFromLastPage = null;
    const queryString = location.search;
    if (queryString && queryString !== "") {
        errorFromLastPage = utils.getParamFromQueryString(queryString).error;
    }

    useEffect(() => {
        // Run once in component lifecycle
        if (model.getData()) {
            // If user is already logged in, then redirect to dashboard
            history.replace('/users');
        }
    }, []);

    return (
        <React.Fragment>
            <Loader showLoader={showLoader} />
            <Typography variant="h5" className={classes.alignCenter}>Login</Typography>
            <TextErrorBox error={error || errorFromLastPage} />
            <div className={`${classes.loginCard}`}>
                <Card>
                    <CardContent>
                        <div className={classes.fieldRow}>
                            <ColumnInput label={'Username:'} required={true} value={username} onChange={(evt) => setUsername(evt.target.value)} />

                        </div>
                        <div className={classes.fieldRow}>
                            <ColumnInput label={'Password:'} type="password" required={true} value={password} onChange={(evt) => setPassword(evt.target.value)} />
                        </div>
                    </CardContent>
                    <CardActions className={classes.loginCardFooter}>
                        <Button className={classes.loginBtn} variant="contained" color={'primary'} onClick={(event) => {
                            event.preventDefault();
                            if (username.trim() !== "" && password.trim() !== "") {
                                setShowLoader(true);
                                model.loginUser({
                                    email: username,
                                    password
                                }).then((response) => {
                                    setShowLoader(false);
                                    if (response.error && response.error !== "") {
                                        // Response for login is not expected one
                                        setError(response.error);
                                    }
                                    else {
                                        // Login success
                                        const data = response.data;
                                        model.saveData({ email: username, token: data.token });
                                        history.push({
                                            pathname: "/users"
                                        });
                                    }
                                }).catch((err) => {
                                    // Response for login is bad response like 400, 404.
                                    setShowLoader(false);
                                    setError(err.response.data.error);
                                });
                            }
                            else {
                                // Validation fails
                                setError('Please specify correct username or password');
                                return false;
                            }
                        }}>Login</Button>
                    </CardActions>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Login);
