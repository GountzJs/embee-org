import { rewardsApiUrl } from '@/core/settings';
import { UserRankEntity } from '@/ranking/models/entities/user-rank.entity';

export const getUserByUsername = async (
  username: string,
): Promise<{ users: UserRankEntity[] }> => {
  const url = new URL(`${rewardsApiUrl}/users`);
  url.searchParams.append('username', username);
  const res = await fetch(url.toString(), {
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
