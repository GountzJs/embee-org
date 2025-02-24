import { getPlayerSprite } from '@consts/player-sprite';
import { TmiService } from '@services/tmi';
import { getContrastingColor } from '@utils/contract-color';
import Phaser from 'phaser';
import { initArenaAnimations } from '../animations/arena-animations';
import { initArenaSprites } from '../sprites/arena-sprites';

export class ArenaScene extends Phaser.Scene {
  tmiService = new TmiService();
  players: Map<
    string,
    {
      sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
      text: Phaser.GameObjects.Text;
      timer: NodeJS.Timeout;
      name: string;
    }
  > = new Map();

  constructor() {
    super({ key: 'arena-scene' });
    this.tmiService.connect().then(() => {
      console.log('🤖 Connected to Twitch chat!');
      this.tmiService.on((_channel, tags, _message, self) => {
        if (self) return;
        const username = tags['display-name'];
        this.addPlayer(username, tags['color'] || '#fff');
      });
    });
  }

  shutdown(): void {
    this.tmiService.disconnect().then(() => {
      console.log('🤖 Disconnected from Twitch chat!');
    });
  }

  private addPlayer(username: string, color: string = '#fff') {
    if (this.players.has(username)) return;

    const nameSprite = getPlayerSprite(username);

    const randomVelocity = Math.random() * (100 - 50) + 50;
    const randomXPositon = Math.random() * (this.scale.width - 80);

    const sprite = this.physics.add
      .sprite(randomXPositon, 20, nameSprite)
      .setOrigin(0, 1)
      .setCollideWorldBounds(true)
      .setGravityY(300)
      .setVelocityX(randomVelocity);

    const text = this.add.text(0, 0, username, {
      backgroundColor: getContrastingColor(color),
      color,
      padding: { x: 4, y: 2 },
      font: '14px Pixelify Sans bold',
      align: 'center',
    });

    const timer = setTimeout(() => {
      this.removePlayer(username);
    }, 900000);

    this.players.set(username, { sprite, name: nameSprite, text, timer });

    console.log('🎮 ${username} ha entrado al lobby!');
  }

  private removePlayer(username: string) {
    if (!this.players.has(username)) return;

    const { sprite, text, timer } = this.players.get(username) || {};

    if (timer) clearTimeout(timer);

    sprite?.destroy();
    text?.destroy();

    this.players.delete(username);

    console.log('🚪 ${username} ha salido del lobby!');
  }

  preload() {
    initArenaSprites(this.load);
  }

  create() {
    initArenaAnimations(this.anims);
  }

  update(): void {
    this.players.forEach((player) => {
      const { sprite, name, text } = player;
      const randomVelocity = Math.random() * 50 + 50;
      if (sprite.flipX) {
        if (sprite.x <= 20) {
          sprite.flipX = false;
        }
        sprite.setVelocityX(
          sprite.x <= 20 ? randomVelocity : sprite.body.velocity.x,
        );
      } else {
        if (sprite.x + sprite.width >= this.scale.width - 20)
          sprite.flipX = true;
        sprite.setVelocityX(
          sprite.x + sprite.width >= this.scale.width - 20
            ? -randomVelocity
            : sprite.body.velocity.x,
        );
      }
      text.setPosition(
        sprite.x - text.width / 2 + sprite.width / 2,
        sprite.y - sprite.height - 25,
      );

      sprite.anims.play(`${name}-walk`, true);
    });
  }
}
