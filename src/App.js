import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import PrivateRoute from './PrivateRoute';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import User from './components/User';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* PrivateRoute component would only allow authorized user to access the component */}
          <PrivateRoute path="/users/:id" renderComponent={User} />
          <PrivateRoute path="/users" renderComponent={Dashboard} />
          {/* Root component is Login component */}
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
