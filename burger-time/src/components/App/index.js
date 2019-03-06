import React, { Component } from 'react';

import BurgerBuilder from '../../containers/BurgerBuilder';
import Layout from '../Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}

export default App;
