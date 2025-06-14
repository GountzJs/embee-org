import Phaser from 'phaser';

export function initArenaSprites(load: Phaser.Loader.LoaderPlugin) {
  // Shaco
  load.spritesheet('shaco', '/sprites/shaco/shaco.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('shaco-pa', '/sprites/shaco-pa/shaco-pa.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('shaco-miau', '/sprites/shaco-miau/shaco-miau.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  // Aurora
  load.spritesheet('aurora', '/sprites/aurora/aurora.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('kalista', '/sprites/kalista/kalista.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('galio', 'sprites/galio/galio.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('anivia', '/sprites/anivia/anivia.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('pyke', '/sprites/pyke/pyke.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('rell', '/sprites/rell/rell.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet(
    'rell-star-guardian-yellow',
    '/sprites/rell-star-guardian-yellow/rell-star-guardian-yellow.png',
    {
      frameWidth: 128,
      frameHeight: 128,
    },
  );

  load.spritesheet('ahri', '/sprites/ahri/ahri.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('seraphine', '/sprites/seraphine/seraphine.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('zed', '/sprites/zed/zed.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('nautilus', '/sprites/nautilus/nautilus.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet(
    'nautilus-crystalis-indomitus',
    '/sprites/nautilus-crystalis-indomitus/nautilus-crystalis-indomitus.png',
    {
      frameWidth: 128,
      frameHeight: 128,
    },
  );

  load.spritesheet(
    'god-king-darius',
    '/sprites/god-king-darius/god-king-darius.png',
    {
      frameWidth: 128,
      frameHeight: 128,
    },
  );

  load.spritesheet(
    'anivia-team-spirit',
    '/sprites/anivia-team-spirit/anivia-team-spirit.png',
    {
      frameWidth: 128,
      frameHeight: 128,
    },
  );

  load.spritesheet('teemo', '/sprites/teemo/teemo.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet(
    'zed-galaxy-slayer',
    '/sprites/zed-galaxy-slayer/zed-galaxy-slayer.png',
    {
      frameWidth: 128,
      frameHeight: 128,
    },
  );

  load.spritesheet('lux', '/sprites/lux/lux.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('xayah', '/sprites/xayah/xayah.png', {
    frameWidth: 128,
    frameHeight: 128,
  });

  load.spritesheet('orianna', '/sprites/orianna/orianna.png', {
    frameWidth: 128,
    frameHeight: 128,
  });
}
