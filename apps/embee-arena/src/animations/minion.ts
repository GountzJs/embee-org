import Phaser from "phaser";

type Props = {
	anims: Phaser.Animations.AnimationManager;
};

export const createMinionAnimation = ({ anims }: Props) => {
	anims.create({
		key: "minion-idle",
		frames: [{ key: "minion", frame: 0 }],
		frameRate: 12,
		repeat: -1,
	});
	anims.create({
		key: "minion-walk",
		frames: [
			{ key: "minion-move-1", frame: 0 },
			{ key: "minion-move-2", frame: 0 },
			{ key: "minion-move-3", frame: 0 },
			{ key: "minion-move-4", frame: 0 },
			{ key: "minion-move-5", frame: 0 },
			{ key: "minion-move-6", frame: 0 },
		],
		frameRate: 12,
		repeat: -1,
	});
};
