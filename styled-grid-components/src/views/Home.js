import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Heading } from '../components/Heading';

class Home extends Component {
  render() {
    return (
      <div>
        <Heading>Styled Grid Components</Heading>
        <ul>
          <li>
            <Link to="/base-grid">Base Grid</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
