import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const NavBar = () => (
  <Menu pointing secondary size="massive">
    <Menu.Item as={Nav} to="/" name="Team Info" />
    <Menu.Item as={Nav} to="/players" name="Players" />
    <Menu.Item as={Nav} to="/heroes" name="Heroes" />
    <Menu.Item as={Nav} to="/team-organization" name="Team Organization" />
  </Menu>
);

export default withRouter(NavBar);
