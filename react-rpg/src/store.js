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

const xpReducer = (state = 0, action) => {
  switch (action.type) {
    case Actions.GAIN_XP:
      return state + action.payload;
    default:
      return state;
  }
};

const levelReducer = (state = 1, action) => {
  switch (action.type) {
    case Actions.LEVEL_UP:
      return state + 1;
    default:
      return state;
  }
};

const positionReducer = (state = initialState.position, action) => {
  switch (action.type) {
    case Actions.MOVE:
      const { x, y } = action.payload;
      action.payload.x += state.x;
      action.payload.y += state.y;
      return { x, y };
    default:
      return state;
  }
};

const statsReducer = (state = initialState.stats, action) => {
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

const inventoryReducer = (state = initialState.inventory, action) => {
  let { potions } = state;

  switch (action.type) {
    case Actions.DRINK_POTION:
      potions = Math.max(0, potions - 1);
      return { ...state, potions };
    default:
      return state;
  }
};

const reducer = combineReducers({
  xp: xpReducer,
  level: levelReducer,
  position: positionReducer,
  stats: statsReducer,
  inventory: inventoryReducer
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
