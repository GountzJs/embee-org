import { UserEntity } from '@/auth/models/entities/user.entity';
import { useSessionStore } from '@/auth/store/session.store';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../services/twitch';

export function useGetUserInfo() {
  const [data, setData] = useState<UserEntity | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const accessToken = useSessionStore((state) => state.token);

  useEffect(() => {
    if (!accessToken) return;
    setLoading(true);
    getUserInfo(accessToken)
      .then(({ data }) => setData(data[0]))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [accessToken]);

  return { data, error, isLoading };
}
