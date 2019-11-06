import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';
/********************************* Polyfills *********************************/
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.array.find';
import 'core-js/modules/es6.array.from';
import 'core-js/modules/es6.math.sign';
import 'core-js/modules/es6.object.assign';
import 'core-js/modules/es6.array.map';
import 'core-js/modules/es6.map';
import 'core-js/modules/es6.set';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';
import 'core-js/modules/es7.array.flat-map';
import 'core-js/modules/es7.array.includes';
import 'core-js/es6/array';
import 'core-js/es7/array';
import 'core-js/es5';
import 'es6-map';
/********************************* Polyfills *********************************/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
