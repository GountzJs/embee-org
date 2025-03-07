export const getPlayerSprite = (username: string) => {
  switch (username) {
    case 'embeejayz':
      return 'shaco-pa';
    case 'LulaKamii_yusi':
      return 'ahri';
    case 'gountzjs':
      return 'kalista';
    case 'QLuuA':
      return 'galio';
    case 'matintosh':
      return 'anivia';
    case 't1alastorzz':
      return 'pyke';
    case 'kinggedox':
      return 'rell';
    case 'angelwangel1':
      return 'zed';
    case 'Mari_yusi':
      return 'seraphine';
    default:
      return 'shaco';
  }
};
