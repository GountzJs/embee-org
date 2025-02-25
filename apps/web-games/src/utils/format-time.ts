export function formatTime(seconds: number): string {
  // Calcular minutos y segundos
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  // Formatear con dos dígitos (padStart)
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}
