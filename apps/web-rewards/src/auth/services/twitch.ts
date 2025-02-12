import { UserEntity } from '@/auth/models/entities/user.entity';
import { twitchApiUrl, twitchClientId } from '@/core/settings';

export const getUserInfo = async (
  token: string,
): Promise<{ data: UserEntity[] }> => {
  const res = await fetch(`${twitchApiUrl}/helix/users`, {
    method: 'GET',
    headers: {
      'Client-ID': twitchClientId,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
};
