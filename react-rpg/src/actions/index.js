

export const GAIN_XP = 'GAIN_XP';
export const LEVEL_UP = 'LEVEL_UP';
export const MOVE = 'MOVE';
export const DRINK_POTION = 'DRINK_POTION';
export const TAKE_DAMAGE = 'TAKE_DAMAGE';

//
//  Action Creators
//

export const gainXp = xp => ({
  type: GAIN_XP,
  payload: xp
});

export const levelUp = () => ({
  type: LEVEL_UP
});

export const move = (x, y) => ({
  type: MOVE,
  payload: { x, y }
});

export const drinkPotion = () => ({
  type: DRINK_POTION
});

export const takeDamage = amount => ({
  type: TAKE_DAMAGE,
  payload: amount
});
