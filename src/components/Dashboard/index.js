import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import style from './style';

import Loader from '../../shared-components/Loader';
import TextErrorBox from '../../shared-components/TextErrorBox';

import model from './model';


const useStyles = makeStyles((theme) => style(theme));

/**
 * Dashboard Component
 * @param {*} props 
 */
function Dashboard(props) {
    const classes = useStyles();
    const [data, setData] = useState({ data: undefined });
    const [pageNo, setPageNo] = useState(0);
    const [error, setError] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const { history } = props;

    useEffect(() => {
        // Calls whenever there is change in page number
        setShowLoader(true);
        model.getUsers(pageNo + 1).then((response) => {
            setShowLoader(false);
            if (response && response.data) {
                // If get response successfully
                setData(response.data);
            }
            else {
                // If data comes undefined in the response
                setError('Unable to fetch users. Please contact site administrator');
            }
        }).catch((error) => {
            // If some error happens like 404 Not Found or 400 Bad request
            setShowLoader(false);
            setError('Unable to fetch users. Please contact site administrator');
        });
    }, [pageNo]);

    // Columns set according to the data pattern.
    const columns = [{ key: 'avatar', label: 'Avatar' }, { key: 'first_name', label: 'First Name' }, { key: 'last_name', label: 'Last Name' }, { key: 'email', label: 'Email' }, { key: 'actions', label: 'Actions' }];

    return (
        <React.Fragment>
            <Loader showLoader={showLoader} />
            <TextErrorBox error={error} />
            {/* Header */}
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Dashboard
                    </Typography>
                    <div className={classes.logoutBtnContainer}>
                        <Button color="inherit" onClick={(evt) => {
                            evt.preventDefault();
                            if (model.logoutUser()) {
                                history.replace('/');
                            }
                            else {
                                setError('Unable to logout. Please try after sometime');
                            }
                        }}>Logout</Button>
                    </div>
                </Toolbar>
            </AppBar>
            {/* Header ends */}
            {/* Body start */}
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.key}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.data ? data.data.map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = column.key !== 'actions' ? row[column.key] : null;
                                            if (column.key === 'avatar') {
                                                return (
                                                    <TableCell key={`${row.id}-${column.key}`}>
                                                        <Avatar alt={`${row.first_name} ${row.last_name} Avatar`} src={value} />
                                                    </TableCell>
                                                );
                                            }
                                            else if (column.key === 'actions') {
                                                return (
                                                    <TableCell key={`${row.id}-${column.key}`}>
                                                        <Button color={'primary'} onClick={(evt) => {
                                                            evt.preventDefault();
                                                            history.push(`/users/${row.id}`);
                                                        }}>View</Button>
                                                    </TableCell>
                                                );
                                            }
                                            else {
                                                return (
                                                    <TableCell key={`${row.id}-${column.key}`}>
                                                        {value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            }) : (
                                    <TableRow>
                                        <TableCell colSpan={5}>No Data</TableCell>
                                    </TableRow>
                                )}
                        </TableBody>
                    </Table>
                </TableContainer>
                {data.data ? <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={data.total}
                    rowsPerPage={data.per_page}
                    page={pageNo}
                    onChangePage={(evt, newPage) => setPageNo(newPage)}
                /> : <React.Fragment />}
            </Paper>
            {/* Body ends */}
        </React.Fragment>
    )
}

export default withRouter(Dashboard);
