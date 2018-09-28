import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  grid-area: Menu;
  background-color: grey;
  display: flex;
  align-items: center;
`;

const MenuBar = () => (
  <Menu>
    Menu Items
  </Menu>

);


export default MenuBar;
