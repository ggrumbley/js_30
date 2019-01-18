import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is an app</h1>
        <div className="grid-container">
          <section class="Combat">Combat Section</section>
          <section class="Character">Character Section</section>
          <section class="Inventory">Inventory Section</section>
          <section class="Notes">Notes Section</section>
        </div>
      </div>
    );
  }
}

export default App;
