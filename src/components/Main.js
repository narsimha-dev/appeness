import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRouter';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import  EmployeeDetails  from './EmployeeDetails';

export const Main=()=>{
        return <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/employees/list" component={EmployeeDetails}/>
            </Switch>
}