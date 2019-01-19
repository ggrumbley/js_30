import React, { Component } from 'react';

import Tabs from './Components/Tabs';

class App extends Component {
  render() {
    return (
      <div>
        <Tabs />
        <div className="grid-container">
          <section className="Combat">Combat Section</section>
          <section className="Character">Character Section</section>
          <section className="Inventory">Inventory Section</section>
          <section className="Spells">Spells Section</section>
          <section className="Notes">Notes Section</section>
        </div>
      </div>
    );
  }
}

export default App;
