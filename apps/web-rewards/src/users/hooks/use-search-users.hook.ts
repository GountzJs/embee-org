import { useEffect, useState } from 'react';
import { UserSearchEntity } from '../models/entities/user-search.entity';
import { getUserByUsername } from '../services/users';

interface Props {
  username: string;
}

export function useSearchUsers({ username }: Props) {
  const [data, setData] = useState<UserSearchEntity[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [bouncer, setBouncer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!username || username.length < 3) return;
    if (bouncer) clearTimeout(bouncer);
    setLoading(true);
    setBouncer(
      setTimeout(() => {
        getUserByUsername(username)
          .then(({ users }) => setData(users))
          .catch(() =>
            setError(
              'No se pudo hacer la busqueda, intentelo de nuevo en unos minutos',
            ),
          )
          .finally(() => setLoading(false));
      }, 1000),
    );
    return () => {
      if (bouncer) clearTimeout(bouncer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return {
    data,
    error,
    isLoading,
  };
}
