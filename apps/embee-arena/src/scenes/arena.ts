import Phaser from 'phaser';

export class ArenaScene extends Phaser.Scene {
  shaco: Phaser.GameObjects.Sprite;

  constructor() {
    super({ key: 'arena-scene' });
  }

  preload() {
    this.load.spritesheet('shaco', '/sprites/shaco.png', {
      frameWidth: 64,
      frameHeight: 40,
    });
  }

  create() {
    this.shaco = this.add.sprite(100, 140, 'shaco').setOrigin(0, 1);

    this.anims.create({
      key: 'shaco-walk',
      frames: this.anims.generateFrameNumbers('shaco', { start: 0, end: 7 }),
      repeat: -1,
    });
  }
}
