import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';


const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ Splash } onEnter={ _redirectIfLoggedIn } />
        <Route path='dashboard' component={ Dashboard } onEnter={ _redirectIfLoggedOut }/>
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
