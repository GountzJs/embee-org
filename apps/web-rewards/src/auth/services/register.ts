import { rewardsApiUrl } from '@/core/settings';

export const registerUser = async (token: string) => {
  const res = await fetch(`${rewardsApiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) throw data;
  return data;
};
