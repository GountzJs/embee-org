import { Rank } from '@/ranking/models/enums/rank.enum';
import Image from 'next/image';

interface Props {
  rank: Rank;
  width?: number;
  height?: number;
}

export function BorderImage({ rank, width = 330, height = 594 }: Props) {
  const bRank = rank.toLowerCase();

  return (
    <Image
      src={`/borders/${bRank}.webp`}
      loading="eager"
      width={width}
      height={height}
      alt={`Rank ${bRank} border`}
    />
  );
}
