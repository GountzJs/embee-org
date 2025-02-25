import { Rank } from '@/ranking/models/enums/rank.enum';

interface Props {
  rank: Rank;
  width?: number;
  height?: number;
}

export function BorderImage({ rank, width = 330, height = 594 }: Props) {
  const bRank = rank.toLowerCase();

  return (
    <img
      src={`/borders/${bRank}.webp`}
      loading="eager"
      width={width}
      height={height}
      alt={`Rank ${bRank} border`}
    />
  );
}
