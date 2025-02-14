import { rewardsApiUrl } from '@/core/settings';
import { UserBorderEntity } from '../models/entities/user-border.entity';

export const getBordersByUserId = async (
  userId: string,
): Promise<{ borders: UserBorderEntity[] }> => {
  const res = await fetch(`${rewardsApiUrl}/borders/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const data = await res.json();
  if (!res.ok) throw data;
  return data;
};
