import Phaser from 'phaser';

export function initArenaAnimations(anims: Phaser.Animations.AnimationManager) {
  anims.create({
    key: 'shaco-walk',
    frames: [
      { key: 'shaco', frame: 0 },
      { key: 'shaco', frame: 1 },
      { key: 'shaco', frame: 2 },
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
    key: 'shaco-miau-walk',
    frames: [
      { key: 'shaco-miau', frame: 0 },
      { key: 'shaco-miau', frame: 1 },
      { key: 'shaco-miau', frame: 2 },
      { key: 'shaco-miau', frame: 3 },
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
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'rell-star-guardian-yellow-walk',
    frames: [
      { key: 'rell-star-guardian-yellow', frame: 0 },
      { key: 'rell-star-guardian-yellow', frame: 1 },
      { key: 'rell-star-guardian-yellow', frame: 2 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'ahri-walk',
    frames: [
      { key: 'ahri', frame: 0 },
      { key: 'ahri', frame: 1 },
      { key: 'ahri', frame: 2 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'seraphine-walk',
    frames: [
      { key: 'seraphine', frame: 0 },
      { key: 'seraphine', frame: 1 },
      { key: 'seraphine', frame: 2 },
      { key: 'seraphine', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'zed-walk',
    frames: [
      { key: 'zed', frame: 0 },
      { key: 'zed', frame: 1 },
      { key: 'zed', frame: 2 },
      { key: 'zed', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'nautilus-walk',
    frames: [
      { key: 'nautilus', frame: 0 },
      { key: 'nautilus', frame: 1 },
      { key: 'nautilus', frame: 2 },
      { key: 'nautilus', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'god-king-darius-walk',
    frames: [
      { key: 'god-king-darius', frame: 0 },
      { key: 'god-king-darius', frame: 1 },
      { key: 'god-king-darius', frame: 2 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'nautilus-crystalis-indomitus-walk',
    frames: [
      { key: 'nautilus-crystalis-indomitus', frame: 0 },
      { key: 'nautilus-crystalis-indomitus', frame: 1 },
      { key: 'nautilus-crystalis-indomitus', frame: 2 },
      { key: 'nautilus-crystalis-indomitus', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'anivia-team-spirit-walk',
    frames: [
      { key: 'anivia-team-spirit', frame: 0 },
      { key: 'anivia-team-spirit', frame: 1 },
      { key: 'anivia-team-spirit', frame: 2 },
      { key: 'anivia-team-spirit', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'teemo-walk',
    frames: [
      { key: 'teemo', frame: 0 },
      { key: 'teemo', frame: 1 },
      { key: 'teemo', frame: 2 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'zed-galaxy-slayer-walk',
    frames: [
      { key: 'zed-galaxy-slayer', frame: 0 },
      { key: 'zed-galaxy-slayer', frame: 1 },
      { key: 'zed-galaxy-slayer', frame: 2 },
      { key: 'zed-galaxy-slayer', frame: 3 },
    ],
    repeat: -1,
    frameRate: 5,
  });

  anims.create({
    key: 'lux-walk',
    frames: [
      { key: 'lux', frame: 0 },
      { key: 'lux', frame: 1 },
      { key: 'lux', frame: 2 },
      { key: 'lux', frame: 3 },
    ],
    repeat: -1,
    frameRate: 6,
  });

  anims.create({
    key: 'xayah-walk',
    frames: [
      { key: 'xayah', frame: 0 },
      { key: 'xayah', frame: 1 },
      { key: 'xayah', frame: 2 },
    ],
    repeat: -1,
    frameRate: 4,
  });

  anims.create({
    key: 'orianna-walk',
    frames: [
      { key: 'orianna', frame: 0 },
      { key: 'orianna', frame: 1 },
      { key: 'orianna', frame: 2 },
      { key: 'orianna', frame: 3 },
    ],
    repeat: -1,
    frameRate: 4,
  });
}
