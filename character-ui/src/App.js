import React, { Component } from 'react';

import CharacterSection from './Containers/CharacterSection';
import CombatSection from './Containers/CombatSection';
import InventorySection from './Containers/InventorySection';
import NotesSection from './Containers/NotesSection';
import SpellsSection from './Containers/SpellsSection';

import Tabs from './Components/Tabs';

class App extends Component {
  render() {
    return (
      <div>
        <Tabs />
        <div className="grid-container">
          <CombatSection />
          <CharacterSection />
          <InventorySection />
          <SpellsSection />
          <NotesSection />
        </div>
      </div>
    );
  }
}

export default App;
