import { staticUrl } from '@/core/client-settings';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { BorderRank } from '../border-rank/border-rank';

export function ExampleBorder() {
  return (
    <BorderRank
      username={'Embeejayz'}
      rank={Rank.Challenger}
      name={'Faker'}
      avatarUrl={`${staticUrl}/images/embee/avatar-2.png`}
      url="/images/proplayers/faker/default.png"
    />
  );
}
