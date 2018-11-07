import { createStore, combineReducers } from 'redux';

const initialState = {
  hero: {
    xp: 0,
    level: 1,
    position: {
      x: 0,
      y: 0
    },
    stats: {
      health: 50,
      maxHealth: 50
    },
    inventory: {
      potions: 1
    }
  },
  monster: {}
};

//
//  Actions
//

const Actions = {
  GAIN_XP: 'GAIN_XP',
  LEVEL_UP: 'LEVEL_UP',
  MOVE: 'MOVE',
  DRINK_POTION: 'DRINK_POTION',
  TAKE_DAMAGE: 'TAKE_DAMAGE'
};

//
//  Action Creators
//

const gainXp = xp => ({
  type: Actions.GAIN_XP,
  payload: xp
});

const levelUp = () => ({
  type: Actions.LEVEL_UP
});

const move = (x, y) => ({
  type: Actions.MOVE,
  payload: { x, y }
});

const drinkPotion = () => ({
  type: Actions.DRINK_POTION
});

const takeDamage = amount => ({
  type: Actions.TAKE_DAMAGE,
  payload: amount
});

//
// Reducers
//
const statsReducer = (state = initialState.hero.stats, action) => {
  let { health, maxHealth } = state;

  switch (action.type) {
    case Actions.DRINK_POTION:
      health = Math.min(health + 20, maxHealth);
      return { ...state, health, maxHealth };
    case Actions.TAKE_DAMAGE:
      health = Math.max(0, health - action.payload);
      return { ...state, health };
    default:
      return state;
  }
};

const inventoryReducer = (state = initialState.hero.inventory, action) => {
  let { potions } = state;

  switch (action.type) {
    case Actions.DRINK_POTION:
      potions = Math.max(0, potions - 1);
      return { ...state, potions };
    default:
      return state;
  }
};

const heroReducer = (state = initialState.hero, action) => {
  const { stats, inventory } = state;

  switch (action.type) {
    case Actions.GAIN_XP:
      const xp = state.xp + action.payload;
      return { ...state, xp };

    case Actions.LEVEL_UP:
      const level = state.level + 1;
      return { ...state, level };

    case Actions.MOVE:
      let { position: { x, y } } = state;
      x += action.payload.x;
      y += action.payload.y;
      return { ...state, position: { x, y } };

    case Actions.DRINK_POTION:
      return {
        ...state,
        stats: statsReducer(stats, action),
        inventory: inventoryReducer(inventory, action)
      };
    case Actions.TAKE_DAMAGE:
      return {
        ...state,
        stats: statsReducer(stats, action)
      };

    default:
      return state;
  }
};

const monsterReducer = (state = initialState.monster, action) => state;

const reducer = combineReducers({
  hero: heroReducer,
  monster: monsterReducer
});

const store = createStore(reducer);

store.subscribe(() => {
  console.log(JSON.stringify(store.getState()));
});

//
//  Run!
//
store.dispatch(move(1, 0));
store.dispatch(move(0, 1));
store.dispatch(takeDamage(13));
store.dispatch(drinkPotion());
store.dispatch(gainXp(100));
store.dispatch(levelUp());

export default store;
