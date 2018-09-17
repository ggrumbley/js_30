import React, { Component } from 'react';
import styled from 'styled-components';

import { yellow, black } from '../globalStyle';

const Heading = styled.p`
  font-size: 50px;
  border-bottom: 10px solid ${yellow};
  color: ${black};
`;

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Heading>Styled Grid Components</Heading>
      </div>
    );
  }
}

export default Home;
