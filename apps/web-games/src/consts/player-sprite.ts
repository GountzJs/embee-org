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
      return 'anivia-team-spirit';
    case 't1alastorzz':
      return 'pyke';
    case 'kinggedox':
      return 'rell-star-guardian-yellow';
    case 'angelwangel1':
      return 'zed-galaxy-slayer';
    case 'Mari_yusi':
      return 'seraphine';
    case 'Meldrekoski':
      return 'nautilus-crystalis-indomitus';
    case 'Suiz1de':
      return 'god-king-darius';
    case 'TrollyXzyle':
      return 'teemo';
    default:
      return 'shaco';
  }
};
