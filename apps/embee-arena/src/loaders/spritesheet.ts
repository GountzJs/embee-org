import { ISpriteSheet } from "@models/interfaces";

const INIT_SPRITESHEET: ISpriteSheet[] = [
	{
		key: "minion",
		url: "/entities/minion/MM0.png",
		config: {
			frameWidth: 32,
			frameHeight: 29,
		},
	},
	{
		key: "minion-move-1",
		url: "/entities/minion/MM1.png",
		config: {
			frameWidth: 32,
			frameHeight: 46,
		},
	},
	{
		key: "minion-move-2",
		url: "/entities/minion/MM2.png",
		config: {
			frameWidth: 32,
			frameHeight: 46,
		},
	},
	{
		key: "minion-move-3",
		url: "/entities/minion/MM3.png",
		config: {
			frameWidth: 32,
			frameHeight: 40,
		},
	},
	{
		key: "minion-move-4",
		url: "/entities/minion/MM4.png",
		config: {
			frameWidth: 32,
			frameHeight: 44,
		},
	},
	{
		key: "minion-move-5",
		url: "/entities/minion/MM5.png",
		config: {
			frameWidth: 32,
			frameHeight: 47,
		},
	},
	{
		key: "minion-move-6",
		url: "/entities/minion/MM6.png",
		config: {
			frameWidth: 32,
			frameHeight: 46,
		},
	},
	{
		key: "shaco-idle",
		url: "/entities/shaco/shaco-idle.png",
		config: {
			frameWidth: 35,
			frameHeight: 32,
		},
	},
	{
		key: "shaco-mv1",
		url: "/entities/shaco/shaco-mv1.png",
		config: {
			frameWidth: 35,
			frameHeight: 32,
		},
	},
	{
		key: "shaco-mv2",
		url: "/entities/shaco/shaco-mv2.png",
		config: {
			frameWidth: 33,
			frameHeight: 32,
		},
	},
];

export function initSpriteSheet(load: Phaser.Loader.LoaderPlugin) {
	INIT_SPRITESHEET.forEach(({ key, url, config }) => {
		load.spritesheet(key, url, config);
	});
}
