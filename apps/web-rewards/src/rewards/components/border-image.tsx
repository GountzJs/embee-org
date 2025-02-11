import { staticUrl } from "@/core/settings";
import { BorderRank } from "@/rewards/models/enums/rank.enum";

interface Props {
  rank: BorderRank;
  width?: number;
  height?: number;
}

export function BorderImage({ rank, width = 330, height = 594 }: Props) {
  const bRank = rank.toLowerCase();

  return (
    <img
      src={`${staticUrl}/images/borders/${bRank}.png`}
      loading="lazy"
      width={width}
      height={height}
      alt={`Rank ${bRank} border`}
    />
  );
}
