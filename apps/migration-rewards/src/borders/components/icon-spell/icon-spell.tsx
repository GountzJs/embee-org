import { SummonerSpell } from '@/borders/models/enums/summoner-spell.enum';
import { staticUrl } from '@/core/client-settings';

interface Props {
  spell: SummonerSpell;
  width?: number;
  height?: number;
}

export function IconSummonerSpell({ spell, width = 40, height = 40 }: Props) {
  return (
    <img
      src={`${staticUrl}/summoner-spell/${spell}.jpg`}
      loading="lazy"
      width={width}
      height={height}
      alt={`Icon spell ${spell}`}
    />
  );
}
