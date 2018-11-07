import { combineReducers } from 'redux';
import * as actions from '../actions';

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

const xpReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.GAIN_XP:
      return state + action.payload;
    default:
      return state;
  }
};

const levelReducer = (state = 1, action) => {
  switch (action.type) {
    case actions.LEVEL_UP:
      return state + 1;
    default:
      return state;
  }
};

const positionReducer = (state = initialState.position, action) => {
  switch (action.type) {
    case actions.MOVE:
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
    case actions.DRINK_POTION:
      health = Math.min(health + 20, maxHealth);
      return { ...state, health, maxHealth };
    case actions.TAKE_DAMAGE:
      health = Math.max(0, health - action.payload);
      return { ...state, health };
    default:
      return state;
  }
};

const inventoryReducer = (state = initialState.inventory, action) => {
  let { potions } = state;

  switch (action.type) {
    case actions.DRINK_POTION:
      potions = Math.max(0, potions - 1);
      return { ...state, potions };
    default:
      return state;
  }
};

export default combineReducers({
  xp: xpReducer,
  level: levelReducer,
  position: positionReducer,
  stats: statsReducer,
  inventory: inventoryReducer
});
