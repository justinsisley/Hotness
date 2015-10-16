import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import containers from './components/containers';
import layouts from './components/layouts';
import pages from './components/pages';
import history from './helpers/history';

ReactDOM.render((
  <Router history={history}>
    <Route component={containers.App}>
      {/* Public layout */}
      <Route path="/" component={layouts.Public}>
        <IndexRoute component={pages.Home} />
        <Route path="about" component={pages.About} />

        {/* Some paths shouldn't be viewed if the user is logged in */}
        <Route component={containers.RequireNoAuth}>
          <Route path="login" component={pages.Login} />
          <Route path="signup" component={pages.Signup} />
        </Route>

        {/* Styleguide requires authentication */}
        <Route component={containers.RequireAuth}>
          <Route path="styleguide" component={pages.Styleguide} />
        </Route>
      </Route>

      {/* App layout */}
      <Route component={layouts.App}>
        {/* App paths require authentication */}
        <Route component={containers.RequireAuth}>
          <Route path="dashboard" component={pages.Dashboard} />
          <Route path="users" component={pages.Users}>
            <Route path="/user/:userId" component={pages.User} />
          </Route>
        </Route>
      </Route>

      {/* Logout is routed to a container that logs the user out */}
      <Route path="logout" component={containers.Logout} />

      {/* Handle unmatched routes */}
      <Route path="*" component={pages.NotFound} />
    </Route>
  </Router>
), document.getElementById('root'));
