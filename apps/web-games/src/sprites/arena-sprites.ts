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
}
