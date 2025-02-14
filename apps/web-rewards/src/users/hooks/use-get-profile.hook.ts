import { UserProfileEntity } from '@/users/models/entities/user-profile.entity';
import { useEffect, useState } from 'react';
import { getUserById } from '../services/users';

interface Props {
  id: string;
}

export function useGetProfileHook({ id }: Props) {
  const [data, setData] = useState<UserProfileEntity | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getUserById(id)
        .then(({ user }) => setData(user))
        .catch(() => setError('User not found'))
        .finally(() => setLoading(false));
    }
  }, [id]);

  return {
    data,
    error,
    isLoading,
  };
}
