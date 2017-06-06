import React from 'react';

import { Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import {
  gql,
  graphql
} from 'react-apollo';

const navbarProfileQuery = gql`
  query NavbarProfileQuery {
    currentUser {
      uid
      characterName
    }
  }
`;


const NavbarProfile = ({data: {loading, error, currentUser}}) => {
  if (loading) {
    return <Navbar.Text>loading...</Navbar.Text>;
  }
  if (error) {
    return <Navbar.Text>{error.message}</Navbar.Text>
  }
  if(currentUser) {
    return (
      <NavDropdown title={currentUser.uid}>
        <MenuItem href="/logout">Log out</MenuItem>
      </NavDropdown>
    );
  }
  return (
    <NavItem href="/login">
      Log in
    </NavItem>
    );

}

export default graphql(navbarProfileQuery)(NavbarProfile);