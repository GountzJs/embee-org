export const getPlayerSprite = (username: string) => {
  switch (username) {
    case 'embeejayz':
      return 'shaco-pa';
    case 'LulaKamii_yusi':
      return 'aurora';
    default:
      return 'shaco';
  }
};
