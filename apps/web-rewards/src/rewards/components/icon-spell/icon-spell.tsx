import { staticUrl } from '@/core/settings';
import { SummonerSpell } from '@/rewards/models/enums/summoner-spell.enum';

interface Props {
  spell: SummonerSpell;
  size?: number;
}

export function IconSummonerSpell({ spell, size = 40 }: Props) {
  return (
    <img
      src={`${staticUrl}/summoner-spell/${spell}.jpg`}
      loading="lazy"
      width={size}
      height={size}
      alt={`Icon spell ${spell}`}
    />
  );
}
