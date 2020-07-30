import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Loader from '../../shared-components/Loader';
import TextErrorBox from '../../shared-components/TextErrorBox';

import style from './style';
import model from './model';


const useStyles = makeStyles((theme) => style(theme));

function User(props) {
    const classes = useStyles();
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const { match, history } = props;
    let userId = null;
    if (match && match.params) {
        userId = match.params.id;
    }
    useEffect(() => {
        if (userId) {
            setShowLoader(true);
            model.getUser(userId).then((response) => {
                setShowLoader(false);
                if (response && response.data) {
                    setUser(response.data.data);
                }
            }).catch((error) => {
                setShowLoader(false);
                setError('No user found of this id');
            });
        }
    }, []);
    return (
        <React.Fragment>
            <Loader showLoader={showLoader} />
            <TextErrorBox error={error} />
            {user && Object.keys(user).length > 0 ? <Card className={classes.root}>
                <CardContent className={classes.alignCenter}>
                    <Avatar alt={`${user.first_name} ${user.last_name} Avatar`} src={user.avatar} className={classes.largeAvatar} />
                    <Typography variant="h6">{`${user.first_name} ${user.last_name}`}</Typography>
                    <Typography variant="subtitle2">{`${user.email}`}</Typography>
                    <Button color={'primary'} onClick={() => history.goBack()}>Back</Button>
                </CardContent>
            </Card> : <div>No User</div>}

        </React.Fragment>
    );
}

export default withRouter(User);
