import { Rank } from '@/ranking/models/enums/rank.enum';
import { BorderRank } from '../border-rank/border-rank';

export function ExampleBorder() {
  return (
    <BorderRank
      username={'Embeejayz'}
      rank={Rank.Challenger}
      name={'Faker'}
      avatarUrl={`/avatars/embeejayz.avif`}
      url="/images/proplayers/faker/default.png"
    />
  );
}
