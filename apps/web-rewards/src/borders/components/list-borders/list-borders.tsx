import { useBordersUserHook } from '@/borders/hooks/use-borders-user.hook';
import { BorderSort } from '@/borders/models/enums/border-sort';
import { BordersOrderBy } from '@/borders/models/enums/borders-order-by.enum';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { quantityBorderToRank } from '@/ranking/utils/quantity-border-to-rank';
import { InfiniteScrollObserver } from '@/shared/components/infinite-scroll/infinite-scroll';
import { DotsSpinner, Typography } from '@embeeorg/ui-kit';
import { BorderRank } from '../border-rank/border-rank';
import styles from './list-borders.module.css';

interface Props {
  id: string;
  orderBy: BordersOrderBy;
  sort: BorderSort;
  search: string;
}

export function ListBorders({ id, orderBy, sort, search }: Props) {
  const { isLoading, isError, data, isFetching, hasNextPage, fetchNextPage } =
    useBordersUserHook({
      id,
      filterByName: search,
      orderBy,
      sort,
    });
  const borders = data?.pages?.flatMap((page) => page.borders) || [];

  if (isError && !isLoading) return <div>Error: Falló la weá</div>;

  return (
    <div className={styles.container}>
      {!isLoading && borders?.length === 0 && (
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
      {isLoading && <DotsSpinner size={100} />}
      <InfiniteScrollObserver
        onIntersect={() => fetchNextPage()}
        isLoading={isFetching}
        disabled={!hasNextPage}
      />
    </div>
  );
}
