import { IImages } from "@models/interfaces";
import Phaser from "phaser";

const INIT_IMAGES: IImages[] = [
	{
		key: "wall",
		url: "blocks/wall.png",
	},
];

export function initImages(load: Phaser.Loader.LoaderPlugin) {
	INIT_IMAGES.forEach(({ key, url }) => {
		load.image(key, url);
	});
}
