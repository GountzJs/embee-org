import Phaser from 'phaser';

export function initArenaAnimations(anims: Phaser.Animations.AnimationManager) {
  anims.create({
    key: 'shaco-walk',
    frames: [
      { key: 'shaco', frame: 0 },
      { key: 'shaco-1', frame: 1 },
      { key: 'shaco-2', frame: 2 },
      { key: 'shaco-3', frame: 3 },
      { key: 'shaco-4', frame: 4 },
      { key: 'shaco-5', frame: 5 },
      { key: 'shaco-6', frame: 6 },
      { key: 'shaco-7', frame: 7 },
    ],
    repeat: -1,
    frameRate: 5,
  });
  anims.create({
    key: 'shaco-pa-walk',
    frames: [
      { key: 'shaco-pa', frame: 0 },
      { key: 'shaco-pa-1', frame: 1 },
      { key: 'shaco-pa-2', frame: 2 },
      { key: 'shaco-pa-3', frame: 3 },
      { key: 'shaco-pa-4', frame: 4 },
      { key: 'shaco-pa-5', frame: 5 },
      { key: 'shaco-pa-6', frame: 6 },
    ],
    repeat: -1,
    frameRate: 6,
  });
  anims.create({
    key: 'aurora-walk',
    frames: [
      { key: 'aurora', frame: 0 },
      { key: 'aurora-1', frame: 1 },
      { key: 'aurora-2', frame: 2 },
      { key: 'aurora-3', frame: 3 },
      { key: 'aurora-4', frame: 4 },
    ],
    repeat: -1,
    frameRate: 6,
  });
}
