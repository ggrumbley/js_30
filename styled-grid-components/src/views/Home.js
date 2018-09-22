import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Heading } from '../components/Heading';
import Item from '../components/Item';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  width: 400px;
  grid-gap: 20px;
`;
class Home extends Component {
  render() {
    return (
      <div>
        <Heading>Styled Grid Components</Heading>
        <Container>
          <Item>
            <Link to="/base-grid">Base Grid</Link>
          </Item>
          <Item>
            <Link to="/album-layout">Album Layout</Link>
          </Item>
          <Item>
            <Link to="/Gallery">Image Gallery</Link>
          </Item>
          <Item>
            <Link to="/codepen">Codepen Layout</Link>
          </Item>
        </Container>
      </div>
    );
  }
}

export default Home;
