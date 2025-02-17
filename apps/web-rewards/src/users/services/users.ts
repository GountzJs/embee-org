import { rewardsApiUrl } from '@/core/settings';
import { UserProfileEntity } from '@/users/models/entities/user-profile.entity';
import { UserRankEntity } from '@/users/models/entities/user-rank.entity';

export const getUserByUsername = async (
  username: string,
): Promise<{ users: UserRankEntity[] }> => {
  const url = new URL(`${rewardsApiUrl}/api/users`);
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

export const getUserById = async (
  id: string,
): Promise<{ user: UserProfileEntity }> => {
  const url = new URL(`${rewardsApiUrl}/api/users/${id}`);
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
