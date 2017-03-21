import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container';
import PlanetShowContainer from './planets/planet_show_container';
import HostShowContainer from './hosts/host_show_container';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ Splash } onEnter={ _redirectIfLoggedIn } />
        <Route
          path='dashboard'
          component={ DashboardContainer }
          onEnter={ _redirectIfLoggedOut }
        />
        <Route
          path='planets/:planetId'
          component={ PlanetShowContainer }
          onEnter={ _redirectIfLoggedOut }
        >
          <Route
            path='hosts/:hostId'
            component={ HostShowContainer }
            onEnter={ _redirectIfLoggedOut }
          />
        </Route>
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


// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <Router history={ hashHistory }>
//       <Route component={ App }>
//         <Route path="/" component={ Home } />
//       </Route>
//     </Router>
//   </Provider>
// );
