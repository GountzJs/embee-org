import Phaser from 'phaser';

export function initArenaSprites(load: Phaser.Loader.LoaderPlugin) {
  // Shaco
  load.spritesheet('shaco', '/sprites/shaco/shaco.png', {
    frameWidth: 89,
    frameHeight: 128,
  });
  load.spritesheet('shaco-1', '/sprites/shaco/shaco-1.png', {
    frameWidth: 94,
    frameHeight: 128,
  });
  load.spritesheet('shaco-2', '/sprites/shaco/shaco-2.png', {
    frameWidth: 51,
    frameHeight: 128,
  });
  load.spritesheet('shaco-3', '/sprites/shaco/shaco-3.png', {
    frameWidth: 88,
    frameHeight: 128,
  });
  load.spritesheet('shaco-4', '/sprites/shaco/shaco-4.png', {
    frameWidth: 61,
    frameHeight: 128,
  });
  load.spritesheet('shaco-5', '/sprites/shaco/shaco-5.png', {
    frameWidth: 94,
    frameHeight: 128,
  });
  load.spritesheet('shaco-6', '/sprites/shaco/shaco-6.png', {
    frameWidth: 50,
    frameHeight: 128,
  });
  load.spritesheet('shaco-7', '/sprites/shaco/shaco-7.png', {
    frameWidth: 85,
    frameHeight: 128,
  });
  // Shaco peleador álmico
  load.spritesheet('shaco-pa', '/sprites/shaco-pa/shaco-pa.png', {
    frameWidth: 82,
    frameHeight: 128,
  });
  load.spritesheet('shaco-pa-1', '/sprites/shaco-pa/shaco-pa-1.png', {
    frameWidth: 51,
    frameHeight: 128,
  });
  load.spritesheet('shaco-pa-2', '/sprites/shaco-pa/shaco-pa-2.png', {
    frameWidth: 77,
    frameHeight: 128,
  });
  load.spritesheet('shaco-pa-3', '/sprites/shaco-pa/shaco-pa-3.png', {
    frameWidth: 77,
    frameHeight: 128,
  });
  load.spritesheet('shaco-pa-4', '/sprites/shaco-pa/shaco-pa-4.png', {
    frameWidth: 79,
    frameHeight: 128,
  });
  load.spritesheet('shaco-pa-5', '/sprites/shaco-pa/shaco-pa-5.png', {
    frameWidth: 75,
    frameHeight: 128,
  });
  load.spritesheet('shaco-pa-6', '/sprites/shaco-pa/shaco-pa-6.png', {
    frameWidth: 78,
    frameHeight: 128,
  });

  // Aurora
  load.spritesheet('aurora', '/sprites/aurora/aurora.png', {
    frameWidth: 66,
    frameHeight: 128,
  });
  load.spritesheet('aurora-1', '/sprites/aurora/aurora-1.png', {
    frameWidth: 54,
    frameHeight: 128,
  });
  load.spritesheet('aurora-2', '/sprites/aurora/aurora-2.png', {
    frameWidth: 71,
    frameHeight: 128,
  });
  load.spritesheet('aurora-3', '/sprites/aurora/aurora-3.png', {
    frameWidth: 54,
    frameHeight: 128,
  });
  load.spritesheet('aurora-4', '/sprites/aurora/aurora-4.png', {
    frameWidth: 81,
    frameHeight: 128,
  });
}
