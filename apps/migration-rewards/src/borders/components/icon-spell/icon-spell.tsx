import { SummonerSpell } from '@/borders/models/enums/summoner-spell.enum';
import { staticUrl } from '@/core/client-settings';
import Image from 'next/image';

interface Props {
  spell: SummonerSpell;
  width?: number;
  height?: number;
}

export function IconSummonerSpell({ spell, width = 40, height = 40 }: Props) {
  return (
    <Image
      src={`${staticUrl}/summoner-spell/${spell}.jpg`}
      loading="lazy"
      width={width}
      height={height}
      alt={`Icon spell ${spell}`}
    />
  );
}
