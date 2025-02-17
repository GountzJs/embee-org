import { rewardsApiUrl } from '@/core/settings';
import { UserRankEntity } from '@/users/models/entities/user-rank.entity';

export const getRanking = async (): Promise<{ ranking: UserRankEntity[] }> => {
  const res = await fetch(`${rewardsApiUrl}/api/ranking`, {
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
