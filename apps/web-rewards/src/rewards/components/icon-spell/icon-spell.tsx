import { staticUrl } from '@/core/settings';
import { SummonerSpell } from '@/rewards/models/enums/summoner-spell.enum';

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
