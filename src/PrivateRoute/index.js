import React from 'react';
import { Route, Redirect } from "react-router-dom";
import model from './model';

function PrivateRoute(props) {
    const RenderComponent = props.renderComponent;
    // Get user from local storage
    const user = model.getData();
    // If user is present then redirect to destined component else redirect to login page with error message
    return (
        <Route render={(props) => (
            user === null ? <Redirect to={`/?error=${encodeURI('You must be logged in user')}`} from={props.path} /> : <RenderComponent {...props} />
        )} {...props} />
    );
}

export default PrivateRoute;
