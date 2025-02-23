import { createShacoAnimation } from "@animations/shaco";
import { initImages } from "@loaders/images";
import { initSpriteSheet } from "@loaders/spritesheet";
import { TmiService } from "@services/tmi";
import Phaser from "phaser";

type Player = {
	displayName: string;
	color: string;
	username: string;
};

export class ChatUsersScene extends Phaser.Scene {
	private players: Player[] = [];
	private shacos: Phaser.Physics.Arcade.Sprite[];
	private wall: Phaser.Physics.Arcade.StaticGroup;
	private shacoTexts: Phaser.GameObjects.Text[];

	constructor(private tmiService: TmiService = new TmiService()) {
		super({ key: "chat-users-scene" });
		this.players = [];
		this.shacos = [];
		this.shacoTexts = [];
	}

	private onWallCollision(
		shaco:
			| Phaser.Physics.Arcade.Body
			| Phaser.Types.Physics.Arcade.GameObjectWithBody
			| Phaser.Tilemaps.Tile,
		wall:
			| Phaser.Physics.Arcade.Body
			| Phaser.Types.Physics.Arcade.GameObjectWithBody
			| Phaser.Tilemaps.Tile
	): void {
		const isShacoCollisionLeft = (
			shaco as Phaser.Types.Physics.Arcade.GameObjectWithBody
		).body.touching.left;
		const isShacoCollisionRight = (
			shaco as Phaser.Types.Physics.Arcade.GameObjectWithBody
		).body.touching.right;
		const isWallCollisionLeft = (
			wall as Phaser.Types.Physics.Arcade.GameObjectWithBody
		).body.touching.left;
		const isWallCollisionRight = (
			wall as Phaser.Types.Physics.Arcade.GameObjectWithBody
		).body.touching.right;

		if (isShacoCollisionLeft && isWallCollisionRight) {
			this.moveRight(shaco);
		}
		if (isShacoCollisionRight && isWallCollisionLeft) {
			this.moveLeft(shaco);
		}
	}

	private moveRight(
		shaco:
			| Phaser.Tilemaps.Tile
			| Phaser.Physics.Arcade.Body
			| Phaser.Types.Physics.Arcade.GameObjectWithBody
	): void {
		(shaco as Phaser.Tilemaps.Tile).flipX = false;
		const velocityRandom = Phaser.Math.Between(60, 80);
		(shaco as Phaser.Physics.Arcade.Body).setVelocityX(velocityRandom);
	}

	private moveLeft(
		shaco:
			| Phaser.Tilemaps.Tile
			| Phaser.Physics.Arcade.Body
			| Phaser.Types.Physics.Arcade.GameObjectWithBody
	): void {
		(shaco as Phaser.Tilemaps.Tile).flipX = true;
		const velocityRandom = Phaser.Math.Between(60, 80);
		(shaco as Phaser.Physics.Arcade.Body).setVelocityX(-1 * velocityRandom);
	}

	private initListenerOnMessage(): void {
		this.tmiService.on((_channel, tags, message, self) => {
			if (self) return;
			if (message.toLowerCase() !== "!arena") return;
			if (!this.players.some((p) => p.displayName === tags["display-name"])) {
				const player = {
					displayName: tags["display-name"],
					color: tags.color ?? "#fff",
					username: tags.username,
				};
				this.players.push(player);
				const minion = this.generateMinion(player);
				this.shacos.push(minion);

				this.physics.add.collider(minion, this.wall, (minion, wall) =>
					this.onWallCollision(minion, wall)
				);

				this.removeShaco(player.displayName);
			}
		});
	}

	private generateMinion(player: Player): Phaser.Physics.Arcade.Sprite {
		const randomX = Phaser.Math.Between(40, this.scale.width - 40);
		const shaco = this.physics.add
			.sprite(randomX, 95, "shaco-idle")
			.setScale(1.5)
			.setOrigin(0.5, 0.5)
			.setCollideWorldBounds(true);
		shaco.anims.play("shaco-walk", true);
		const direction = Math.random() < 0.5 ? -1 : 1;
		shaco.setVelocityX(direction * 80);
		shaco.flipX = direction === -1;

		const shacoText = this.add
			.text(shaco.x, shaco.y, player.username, {
				backgroundColor: "#3D3D3Fff",
				color: player.color,
				font: "14px Pixelify Sans bold",
				align: "center",
			})
			.setOrigin(0.5, 1);
		this.shacoTexts.push(shacoText);
		return shaco;
	}

	private initWalls() {
		this.wall = this.physics.add.staticGroup();
		this.wall.create(0, 90, "wall").setOrigin(0.5, 0.5).refreshBody();
		this.wall.create(800, 90, "wall").setOrigin(0.5, 0.5).refreshBody();
	}

	private removeShaco(displayName: string): void {
		setTimeout(() => {
			const index = this.players.findIndex(
				(ply) => ply.displayName === displayName
			);
			this.players = this.players.filter(
				(player) => player.displayName !== displayName
			);
			this.shacoTexts[index].destroy();
			this.shacoTexts.splice(index, 1);
			this.shacos[index].destroy();
			this.shacos.splice(index, 1);
		}, 30 * 60000);
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

	create(): void {
		this.add
			.text(400, 20, `Escriba !arena en el chat para ingresar`, {
				backgroundColor: "#000",
				color: "#fff",
				font: "18px Pixelify Sans",
			})
			.setOrigin(0.5, 0.5);
		this.physics.world.setBounds(0, 0, this.scale.width, this.scale.height);
		createShacoAnimation({ anims: this.anims });
		this.initWalls();
		this.tmiService.connect().then(() => {
			console.log("🤖 Connected to Twitch chat!");
			this.initListenerOnMessage();
		});
	}

	update(): void {
		this.shacos.map((shaco, index) => {
			const shacoText = this.shacoTexts[index];
			if (shacoText) {
				shacoText.setPosition(shaco.x, shaco.y - 20);
			}
		});
	}
}
