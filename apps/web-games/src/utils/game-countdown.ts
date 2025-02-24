import Phaser from "phaser";
import { formatTime } from "./format-time";

export class GameCountdown {
	timer = 78000;
	countdownTimer: number | null = null;
	countdownEvent: Phaser.Time.TimerEvent | null = null;
	countdownInterval: NodeJS.Timeout | null = null;

	startCountdown(callback: () => void): void {
		this.countdownInterval = setInterval(() => {
			this.timer -= 1000;
			callback();
		}, 1000);
	}

	formatTimer(): string {
		return formatTime(this.timer / 1000);
	}

	resetCountdown(): void {
		clearInterval(this.countdownInterval as NodeJS.Timeout);
		this.timer = 78000;
		this.countdownTimer = null;
		this.countdownEvent = null;
		this.countdownInterval = null;
	}
}
