import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';

import Home from './Components/home';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
                <PublicRoute {...props} restricted={true} exact component={SignIn} path="/sign_in"/>
                <PublicRoute {...props} restricted={false} exact component={Home} path="/"/>
            </Switch>       
        </Layout>
    );
};

export default Routes;