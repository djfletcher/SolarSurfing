import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
import PlanetShowContainer from './planets/planet_show_container';
import HostShowContainer from './hosts/host_show_container';
import RequestsContainer from './requests/requests_container';
import About from './about/about';
import HowItWorks from './about/how_it_works';
import Safety from './about/safety';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ Splash } onEnter={ _redirectIfLoggedIn } />
        <Route
          path='dashboard'
          component={ Dashboard }
          onEnter={ _redirectIfLoggedOut } />
        <Route
          path='planets/:planetId'
          component={ PlanetShowContainer }
          onEnter={ _redirectIfLoggedOut } >
          <Route
            path='hosts/:hostId'
            component={ HostShowContainer }
            onEnter={ _redirectIfLoggedOut } />
        </Route>
        <Route
          path='requests'
          component={ RequestsContainer }
          onEnter={ _redirectIfLoggedOut } />
        <Route
          path='about'
          component={ About } />
        <Route
          path='howitworks'
          component={ HowItWorks } />
        <Route
          path='safety'
          component={ Safety } />
    </Route>
    </Router>
  </Provider>
);

const _redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().session.currentUser) {
    replace('/dashboard');
  }
};

const _redirectIfLoggedOut = (nextState, replace) => {
  if (store.getState().session.currentUser === null) {
    replace('/');
  }
};

export default Root;
