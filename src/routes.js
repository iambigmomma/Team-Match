import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches/index';

import Home from './Components/home';
import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import AddEditMatch from './Components/admin/matches/addEditMatches';
import AdminPlayers from './Components/admin/players/index';
import AddEditPlayers from './Components/admin/players/addEditPlayers';



const Routes = (props) => {
    return (
        <Layout>
            <Switch>
                <PrivateRoute {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
                <PrivateRoute {...props} path="/admin_players/add_players" exact component={AddEditPlayers}/>
                <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
                <PrivateRoute {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
                <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
                <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
                <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
                <PublicRoute {...props} restricted={true} exact component={SignIn} path="/sign_in"/>
                <PublicRoute {...props} restricted={false} exact component={Home} path="/"/>
            </Switch>       
        </Layout>
    );
};

export default Routes;