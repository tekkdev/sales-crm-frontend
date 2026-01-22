import React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';

const Home = () => (
  <div>
    <h1>Welcome to Sales CRM</h1>
    <p>Start building your application here.</p>
  </div>
);

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
));
