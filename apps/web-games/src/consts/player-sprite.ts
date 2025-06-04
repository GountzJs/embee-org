export const getPlayerSprite = (username: string) => {
  switch (username) {
    case 'embeejayz':
      return 'shaco-miau';
    case 'LulaKamii_yusi':
      return 'ahri';
    case 'gountzjs':
      return 'kalista';
    case 'QLuuA':
      return 'galio';
    case 'matintosh':
      return 'anivia-team-spirit';
    case 't1alastors':
      return 'pyke';
    case 'kinggedox':
      return 'rell-star-guardian-yellow';
    case 'angelwmilitophia':
      return 'zed-galaxy-slayer';
    case 'Mari_yusi':
      return 'seraphine';
    case 'Meldrekoski':
      return 'nautilus-crystalis-indomitus';
    case 'Suiz1de':
      return 'god-king-darius';
    case 'TrollyXzyle':
      return 'teemo';
    case 'scarlettline':
      return 'lux';
    case 'cass9_8_':
      return 'xayah';
    case 'Skivel1':
      return 'orianna';
    default:
      return 'shaco';
  }
};
