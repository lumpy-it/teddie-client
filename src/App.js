import React, { Component } from 'react';

import 'teddie-bootstrap';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import DoctrineList from './components/DoctrineList';
import NavbarProfile from './components/NavbarProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">TEDDIE</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/" exact>
                  <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/doctrines">
                  <NavItem>Doctrines</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
                <NavbarProfile />
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Grid style={{paddingTop: '60px'}}>

            <Route exact path="/" component={Welcome}/>
            <Route path="/doctrines" component={DoctrineList}/>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
