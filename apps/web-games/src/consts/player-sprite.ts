export const getPlayerSprite = (username: string) => {
  switch (username) {
    case 'embeejayz':
      return 'shaco-pa';
    case 'LulaKamii_yusi':
      return 'aurora';
    case 'gountzjs':
      return 'kalista';
    case 'QLuuA':
      return 'galio';
    case 'matintosh':
      return 'anivia';
    default:
      return 'shaco';
  }
};
