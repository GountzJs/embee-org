import { UserBorderEntity } from '@/borders/models/entities/user-border.entity';
import { getBordersByUserId } from '@/borders/services/borders';
import { useEffect, useState } from 'react';

interface Props {
  id?: string;
}

export function useBordersUserHook({ id }: Props) {
  const [data, setData] = useState<UserBorderEntity[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getBordersByUserId(id)
        .then(({ borders }) => {
          setData(borders);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id]);

  return { data, isLoading, error };
}
