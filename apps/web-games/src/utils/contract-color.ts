export function getContrastingColor(hex: string) {
	if (hex.startsWith("#")) hex = hex.slice(1);
	if (hex.length === 3) {
		hex = hex
			.split("")
			.map((char) => char + char)
			.join("");
	}
	const r = parseInt(hex.slice(0, 2), 16) / 255;
	const g = parseInt(hex.slice(2, 4), 16) / 255;
	const b = parseInt(hex.slice(4, 6), 16) / 255;
	const luminance = (channel: any) =>
		channel <= 0.03928
			? channel / 12.92
			: Math.pow((channel + 0.055) / 1.055, 2.4);

	const l =
		0.2126 * luminance(r) + 0.7152 * luminance(g) + 0.0722 * luminance(b);
	return l > 0.5 ? "#000000" : "#FFFFFF";
}
