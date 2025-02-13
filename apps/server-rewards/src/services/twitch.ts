import { UserEntity } from '../models/entities/user.entity';

export const getUserInfo = async (
  token: string,
  clientId: string,
): Promise<{ data: UserEntity[] }> => {
  const res = await fetch('https://api.twitch.tv/helix/users', {
    method: 'GET',
    headers: {
      'Client-ID': clientId,
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw data;

  return data as { data: UserEntity[] };
};
