import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './PrivateRoute'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello</h1>} />
            <PrivateRoute path="/app" component={() => <h1>Logado</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;