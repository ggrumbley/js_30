import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="tabs is-centered">
          <ul>
            <li className="is-active"><a className="mdi mdi-sword-cross" /></li>
            <li><a className="mdi mdi-shield-account" /></li>
            <li><a className="mdi mdi-treasure-chest" /></li>
            <li><a className="mdi mdi-text" /></li>
          </ul>
        </div>
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
