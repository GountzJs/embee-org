import Phaser from 'phaser';

export function initArenaAnimations(anims: Phaser.Animations.AnimationManager) {
  anims.create({
    key: 'shaco-walk',
    frames: [
      { key: 'shaco', frame: 0 },
      { key: 'shaco', frame: 1 },
      { key: 'shaco', frame: 2 },
      { key: 'shaco', frame: 3 },
    ],
    repeat: -1,
    frameRate: 6,
  });
  anims.create({
    key: 'shaco-pa-walk',
    frames: [
      { key: 'shaco-pa', frame: 0 },
      { key: 'shaco-pa', frame: 1 },
      { key: 'shaco-pa', frame: 2 },
    ],
    repeat: -1,
    frameRate: 6,
  });
  anims.create({
    key: 'aurora-walk',
    frames: [
      { key: 'aurora', frame: 0 },
      { key: 'aurora', frame: 1 },
      { key: 'aurora', frame: 2 },
    ],
    repeat: -1,
    frameRate: 8,
  });

  anims.create({
    key: 'kalista-walk',
    frames: [
      { key: 'kalista', frame: 0 },
      { key: 'kalista', frame: 1 },
      { key: 'kalista', frame: 2 },
    ],
    repeat: -1,
    frameRate: 6,
  });

  anims.create({
    key: 'galio-walk',
    frames: [
      { key: 'galio', frame: 0 },
      { key: 'galio', frame: 1 },
      { key: 'galio', frame: 2 },
    ],
    repeat: -1,
    frameRate: 4,
  });

  anims.create({
    key: 'anivia-walk',
    frames: [
      { key: 'anivia', frame: 0 },
      { key: 'anivia', frame: 1 },
      { key: 'anivia', frame: 2 },
      { key: 'anivia', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'pyke-walk',
    frames: [
      { key: 'pyke', frame: 0 },
      { key: 'pyke', frame: 1 },
      { key: 'pyke', frame: 2 },
      { key: 'pyke', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'rell-walk',
    frames: [
      { key: 'rell', frame: 0 },
      { key: 'rell', frame: 1 },
      { key: 'rell', frame: 2 },
      { key: 'rell', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });
}
