import React from 'react';
import styled from 'styled-components';

const InventoryWindow = styled.div`
  grid-area: Inventory;
  background-color: burlywood;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inventory = () => (
  <InventoryWindow>
    Inventory Window
  </InventoryWindow>

);


export default Inventory;
