import { UserBorderEntity } from '@/borders/models/entities/user-border.entity';
import { rewardsApiUrl } from '@/core/settings';

export const getBordersByUserId = async (
  userId: string,
): Promise<{ borders: UserBorderEntity[] }> => {
  const res = await fetch(`${rewardsApiUrl}/api/borders/${userId}`, {
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
