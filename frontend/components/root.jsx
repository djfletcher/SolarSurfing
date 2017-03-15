import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Home from './home';

// const _redirectIfLoggedIn = (nextState, replace) => {
//   if (store.getState().session.currentUser) {
//     replace('/dashboard');
//   }
// };

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
      </Route>
    </Router>
  </Provider>
);

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
