import React, { Component } from 'react';
import styled from 'styled-components';

import Item from '../components/Item';
import { Heading2 } from '../components/Heading';

const Container = styled.div`
  display: grid;
  /* grid-template-columns: 100px 100px 100px; */
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 200px 100px 400px;
  grid-gap: 20px;
`;

class Base extends Component {
  render() {
    return (
      <div>
        <Heading2>Base Grid</Heading2>
        <Container>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
          <Item>7</Item>
          <Item>8</Item>
          <Item>9</Item>
          <Item>10</Item>
        </Container>
      </div>
    );
  }
}

export default Base;
