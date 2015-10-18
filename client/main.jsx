import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import layouts from './components/layouts';
import pages from './components/pages';
import helpers from './helpers';

ReactDOM.render((
  <Router history={helpers.history}>
    {/* Public layout */}
    <Route path="/" component={layouts.Public}>
      <IndexRoute component={pages.Home} />
      <Route path="about" component={pages.About} />

      {/* Some paths shouldn't be viewed if the user is logged in */}
      <Route path="login" component={pages.Login} onEnter={helpers.auth.requireNoAuth} />
      <Route path="signup" component={pages.Signup} onEnter={helpers.auth.requireNoAuth} />

      {/* Styleguide requires authentication */}
      <Route path="styleguide" component={pages.Styleguide} onEnter={helpers.auth.requireAuth} />
    </Route>

    {/* App layout */}
    {/* All app paths require authentication */}
    <Route component={layouts.App} onEnter={helpers.auth.requireAuth}>
      <Route path="dashboard" component={pages.Dashboard} />
      <Route path="users" component={pages.Users} />
      <Route path="users/:userId" component={pages.User} />
    </Route>

    {/* Logout is routed to a container that logs the user out */}
    <Route path="logout" onEnter={helpers.auth.logOut} />

    {/* Handle unmatched routes */}
    <Route path="*" component={pages.NotFound} />
  </Router>
), document.getElementById('root'));
