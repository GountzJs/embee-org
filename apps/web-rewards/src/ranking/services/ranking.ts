import { rewardsApiUrl } from '@/core/settings';
import { UserRankEntity } from '@/ranking/models/entities/user-rank.entity';

export const getRanking = async (): Promise<{ ranking: UserRankEntity[] }> => {
  const res = await fetch(`${rewardsApiUrl}/ranking`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
};
