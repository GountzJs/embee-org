import { initImages } from "@loaders/images";
import { initSpriteSheet } from "@loaders/spritesheet";
import { Player } from "@models/type";
import { getContrastingColor } from "@utils/contract-color";
import Phaser from "phaser";

type InitProps = {
	players: Player[];
};

export class GameScene extends Phaser.Scene {
	private players: Player[];

	constructor() {
		super({ key: "game-scene" });
		this.players = [];
	}

	private loadMinion(
		player: Player,
		position: { x: number },
		flip = false
	): void {
		const minion = this.physics.add
			.sprite(position.x, 100, "minion")
			.setOrigin(0.5, 0.5)
			.setCollideWorldBounds(true)
			.setGravityY(300);
		this.add
			.text(minion.x, minion.y - 30, player.username, {
				backgroundColor: getContrastingColor(player.color),
				color: player.color,
				padding: { x: 4, y: 2 },
				font: "14px Pixelify Sans bold",
				align: "center",
			})
			.setOrigin(0.5, 0.5);
		minion.flipX = flip;
	}

	init({ players }: InitProps): void {
		this.players = players;
	}

	preload(): void {
		initImages(this.load);
		initSpriteSheet(this.load);
	}

	create(): void {
		const player1 = this.players[0];
		const player2 = this.players[1];
		this.loadMinion(player1, { x: 80 });
		this.loadMinion(player2, { x: this.scale.width - 80 }, true);
	}

	update(): void {}
}
