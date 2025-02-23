import { createMinionAnimation } from "@animations/minion";
import { size } from "@consts/size";
import { initImages } from "@loaders/images";
import { initSpriteSheet } from "@loaders/spritesheet";
import { Minion, Player } from "@models/type";
import { TmiService } from "@services/tmi";
import { getContrastingColor } from "@utils/contract-color";
import { formatTime } from "@utils/format-time";
import Phaser from "phaser";

export class PreviewScene extends Phaser.Scene {
	private players: Player[];
	private minions: Minion[];
	private minionsText: Phaser.GameObjects.Text[];
	private textPlayers: Phaser.GameObjects.Text;
	private textTime: Phaser.GameObjects.Text;
	private timer: number;

	constructor(private tmiService = new TmiService()) {
		super({ key: "preview-scene" });
		this.players = [];
		this.minions = [];
		this.minionsText = [];
		this.tmiService.connect().then(() => this.onMessageHandler());
		this.timer = 15000;
	}

	private onMessageHandler() {
		console.log("🤖 Connected to channel!");
		this.tmiService.on((_channel, tag, _, self) => {
			if (self) return;
			this.loadPlayer({
				displayName: tag["display-name"],
				color: tag.color ?? "#fff",
				username: tag.username,
			});
		});
	}

	private setTextPlayersActive(): void {
		if (this.textPlayers) this.textPlayers.destroy();
		this.textPlayers = this.add
			.text(
				size.width / 2,
				50,
				`Jugadores en la sala: ${this.players.length}`,
				{
					backgroundColor: "#000",
					color: "#fff",
					font: "16px Pixelify Sans",
				}
			)
			.setOrigin(0.5, 0.5);
	}

	private setTextCountdown(): void {
		if (this.textTime) this.textTime.destroy();
		this.textTime = this.add
			.text(
				size.width / 2,
				80,
				`El juego comenzará en: ${formatTime(Math.floor(this.timer / 1000))}`,
				{
					backgroundColor: "#000",
					color: "#fff",
					font: "16px Pixelify Sans",
				}
			)
			.setOrigin(0.5, 0.5);
	}

	private loadPlayer(player: Player): void {
		const randomX = Phaser.Math.Between(40, this.scale.width - 40);
		const minion = this.physics.add
			.sprite(randomX, 100, "minion")
			.setOrigin(0.5, 0.5)
			.setCollideWorldBounds(true)
			.setGravityY(300);
		const text = this.add
			.text(minion.x, minion.y - 30, player.username, {
				backgroundColor: getContrastingColor(player.color),
				color: player.color,
				padding: { x: 4, y: 2 },
				font: "14px Pixelify Sans bold",
				align: "center",
			})
			.setOrigin(0.5, 0.5);
		this.minionsText.push(text);
		this.minions.push({
			id: player.displayName,
			sprite: minion,
		});
		this.players.push(player);
	}

	shutdown(): void {
		this.tmiService.disconnect().then(() => {
			console.log("🤖 Disconnected from!");
		});
	}

	preload(): void {
		initImages(this.load);
		initSpriteSheet(this.load);
	}

	create() {
		this.add
			.text(
				size.width / 2,
				20,
				"Escriba !arena en el chat para ingresar en la sala",
				{
					backgroundColor: "#000",
					color: "#fff",
					font: "18px Pixelify Sans bold",
				}
			)
			.setOrigin(0.5, 0.5);
		createMinionAnimation({ anims: this.anims });
		this.physics.world.setBounds(0, 0, size.width, size.height);
	}

	update(_time: number, delta: number): void {
		if (this.timer <= 0) {
			this.tmiService.disconnect().then(() => {
				console.log("🤖 Disconnected from!");
			});
			this.scene.start("game-scene", {
				players: this.players,
				minions: this.minions,
			});
			this.scene.stop("preview-scene");
			return;
		}
		if (this.players.length >= 2) {
			this.setTextCountdown();
			this.timer = this.timer - delta;
		}
		this.setTextPlayersActive();

		this.minions.map((minion, idx) => {
			const text = this.minionsText.slice(idx, idx + 1)[0];
			text.x = minion.sprite.x;
			text.y = minion.sprite.y - 30;
		});
	}
}
