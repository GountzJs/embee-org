import { useBordersUserHook } from '@/borders/hooks/use-borders-user.hook';
import { UserBorderEntity } from '@/borders/models/entities/user-border.entity';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { quantityBorderToRank } from '@/ranking/utils/quantity-border-to-rank';
import { InputOutline, LensSvg, Typography } from '@embeeorg/ui-kit';
import { useState } from 'react';
import { BorderRank } from '../border-rank/border-rank';
import styles from './list-borders.module.css';

interface Props {
  id: string;
}

export function ListBorders({ id }: Props) {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading, error } = useBordersUserHook({ id });
  const borders = data?.filter((border) =>
    border.name.toLowerCase().includes(search.toLowerCase()),
  );
  const [isTouched, setIsTouched] = useState<boolean>(false);

  if (isLoading) return <div>Buscando bordes...</div>;

  if (error) return <div>Error: {error}</div>;

  const callbackSort = (a: UserBorderEntity, b: UserBorderEntity) => {
    if (a.special === b.special) return b.quantity - a.quantity;

    return a.special ? -1 : 1;
  };

  return (
    <div className={styles.container}>
      <div className={styles['input-search-container']}>
        <LensSvg
          className={styles['icon-search']}
          color={isTouched ? 'var(--ui-kit-secondary-400)' : 'white'}
          size={26}
        />
        <InputOutline
          className={styles['input-search']}
          placeholder="Buscar por nombre"
          onFocus={() => setIsTouched(true)}
          onBlur={() => setIsTouched(false)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {borders?.length === 0 && (
        <div className={styles['not-found-container']}>
          <Typography
            variant="h2"
            family="primary"
            color="white"
            size="4xl"
            weight="extrabold"
          >
            No se han encontrado bordes con el nombre ingresado. Intenta con
            otro.
          </Typography>
        </div>
      )}

      <ul>
        {borders
          ?.sort(callbackSort)
          ?.map(({ id, url, special, quantity, username, avatar, name }) => (
            <li key={id}>
              <BorderRank
                key={id}
                name={name}
                rank={
                  special ? Rank.Challenger : quantityBorderToRank(quantity)
                }
                url={url}
                username={username}
                avatarUrl={avatar}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
