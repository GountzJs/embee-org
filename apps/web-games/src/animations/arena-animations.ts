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
}
