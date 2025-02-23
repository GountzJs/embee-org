import Phaser from "phaser";

type Props = {
	anims: Phaser.Animations.AnimationManager;
};

export const createShacoAnimation = ({ anims }: Props) => {
	anims.create({
		key: "shaco-idle",
		frames: [{ key: "shaco-idle", frame: 0 }],
		frameRate: 12,
		repeat: -1,
	});
	anims.create({
		key: "shaco-walk",
		frames: [
			{ key: "shaco-idle", frame: 0 },
			{ key: "shaco-mv1", frame: 0 },
			{ key: "shaco-mv2", frame: 0 },
		],
		frameRate: 12,
		repeat: -1,
	});
};
