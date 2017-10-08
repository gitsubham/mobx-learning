import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import {Shell} from './shell';
import {ClockPage} from './clock';
import {GithubPage} from './github';
import {CounterPage} from './counter';
import {TemperaturePage} from './temperature';

export let routes = (
    <Route path="/" component={Shell}>
        <IndexRoute component={GithubPage}/>
        <Route path="clock" component={ClockPage}/>
        <Route path="counter" component={CounterPage}/>
        <Route path="temperature" component={TemperaturePage}/>
        <Redirect from="*" to="/"/>
    </Route>
);
