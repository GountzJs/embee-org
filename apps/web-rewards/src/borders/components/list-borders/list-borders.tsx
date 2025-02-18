import { useBordersUserHook } from '@/borders/hooks/use-borders-user.hook';
import { UserBorderEntity } from '@/borders/models/entities/user-border.entity';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { quantityBorderToRank } from '@/ranking/utils/quantity-border-to-rank';
import { InfiniteScrollObserver } from '@/shared/components/infinite-scroll/infinite-scroll';
import { Typography } from '@embeeorg/ui-kit';
import { useState } from 'react';
import { BorderRank } from '../border-rank/border-rank';
import { FormSearch } from '../form-search/form-search';
import styles from './list-borders.module.css';

interface Props {
  id: string;
}

export function ListBorders({ id }: Props) {
  const [search, setSearch] = useState<string>('');
  const { isLoading, isError, data, isFetching, hasNextPage, fetchNextPage } =
    useBordersUserHook({
      id,
      filterByName: search,
    });

  const borders = data?.pages?.flatMap((page) => page.borders) || [];

  if (isError) return <div>Error: Falló la weá</div>;

  const callbackSort = (a: UserBorderEntity, b: UserBorderEntity) => {
    if (a.special === b.special) return b.quantity - a.quantity;

    return a.special ? -1 : 1;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnSubmit = ({ search }: { search: string }) => {
    setSearch(search);
  };

  return (
    <div className={styles.container}>
      <FormSearch
        changeFilters={handleOnSubmit}
        removeSearch={() => setSearch('')}
        isActive={search.length > 3}
      />
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
            <li key={id} className={styles['list-item']}>
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
      {isLoading && <div>Buscando bordes...</div>}
      <InfiniteScrollObserver
        onIntersect={() => fetchNextPage()}
        isLoading={isFetching}
        disabled={!hasNextPage}
      />
    </div>
  );
}
