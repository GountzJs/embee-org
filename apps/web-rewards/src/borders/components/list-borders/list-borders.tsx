import { useBordersUserHook } from '@/borders/hooks/use-borders-user.hook';
import { BorderSort } from '@/borders/models/enums/border-sort';
import { BordersOrderBy } from '@/borders/models/enums/borders-order-by.enum';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { quantityBorderToRank } from '@/ranking/utils/quantity-border-to-rank';
import { InfiniteScrollObserver } from '@/shared/components/infinite-scroll/infinite-scroll';
import { Typography } from '@embeeorg/ui-kit';
import { useState } from 'react';
import { BorderRank } from '../border-rank/border-rank';
import { FormSearch } from './form-search/form-search';
import styles from './list-borders.module.css';

interface Props {
  id: string;
}

export function ListBorders({ id }: Props) {
  const [filters, setFilters] = useState({
    search: '',
    orderBy: BordersOrderBy.Rank,
    sort: BorderSort.Desc,
  });
  const { isLoading, isError, data, isFetching, hasNextPage, fetchNextPage } =
    useBordersUserHook({
      id,
      filterByName: filters.search,
      orderBy: filters.orderBy,
      sort: filters.sort,
    });

  const borders = data?.pages?.flatMap((page) => page.borders) || [];

  if (isError) return <div>Error: Falló la weá</div>;

  const handleOnSubmit = ({
    search,
    orderBy,
    sort,
  }: {
    search: string;
    orderBy: BordersOrderBy;
    sort: BorderSort;
  }) => {
    setFilters({
      search,
      orderBy,
      sort,
    });
  };

  return (
    <div className={styles.container}>
      <FormSearch
        changeFilters={handleOnSubmit}
        removeSearch={() =>
          setFilters({
            search: '',
            orderBy: BordersOrderBy.Rank,
            sort: BorderSort.Desc,
          })
        }
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
        {borders?.map(
          ({ id, url, special, quantity, username, avatar, name }) => (
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
          ),
        )}
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
