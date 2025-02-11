import { staticUrl } from "@/core/settings";

interface Props {
  height?: number;
  width?: number;
}

export function EmbeeWorldsLogo({ height = 140, width = 80 }: Props) {
  return (
    <img
      src={`${staticUrl}/images/embee/embee-worlds-2024.png`}
      loading="lazy"
      height={height}
      width={width}
      alt="Embeejayz Icon"
    />
  );
}
