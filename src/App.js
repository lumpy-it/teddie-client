import React, { Component } from 'react';

import 'teddie-bootstrap';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

import DoctrineList from './components/DoctrineList';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
  networkInterface
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Navbar fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">TEDDIE</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
          </Navbar>
          <Grid style={{paddingTop: '60px'}}>
            <Jumbotron>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>
            <DoctrineList/>
          </Grid>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
