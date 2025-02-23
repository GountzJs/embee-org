import { size } from '@consts/size';
import { ArenaScene } from '@scenes/arena';
import Phaser from 'phaser';
import './style.css';

const config = {
  type: Phaser.CANVAS,
  width: size.width,
  height: size.height,
  transparent: true,
  parent: 'game',
  scene: [ArenaScene],
  physics: {
    default: 'arcade',
    gravity: { y: 300 },
    arcade: {
      debug: false,
    },
  },
};

new Phaser.Game(config);
