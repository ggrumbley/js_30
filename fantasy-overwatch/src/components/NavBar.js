import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const NavBar = () => (
  <Menu tabular attached="top" size="massive">
    <Menu.Item as={Nav} to="/" name="Unit Info" />
    <Menu.Item as={Nav} to="/players" name="Players" />
    <Menu.Item as={Nav} to="/heroes" name="Heroes" />
    <Menu.Item as={Nav} to="/unit-organization" name="Unit Organization" />
  </Menu>
);

export default NavBar;
