import React from 'react';
import { render } from 'react-dom';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

import App from './App.js';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  networkInterface
});

render((
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>)
, document.getElementById('root'));

registerServiceWorker();
