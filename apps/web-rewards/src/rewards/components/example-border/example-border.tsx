import { staticUrl } from '@/core/settings';
import { Rank } from '@/rewards/models/enums/rank.enum';
import { BorderRank } from '../border-rank/border-rank';

export function ExampleBorder() {
  return (
    <BorderRank
      username={'Embeejayz'}
      rank={Rank.Challenger}
      avatarUrl={`${staticUrl}/images/embee/avatar-2.png`}
      name="faker"
    />
  );
}
