import { staticUrl } from '@/core/settings';
import { Rank } from '@/ranking/models/enums/rank.enum';

interface Props {
  rank: Rank;
  width?: number;
  height?: number;
}

export function IconRank({ rank, width = 40, height = 40 }: Props) {
  return (
    <img
      src={`${staticUrl}/icons/rank/${rank}.webp`}
      loading="lazy"
      width={width}
      height={height}
      alt={`Icon rank ${rank}`}
    />
  );
}
