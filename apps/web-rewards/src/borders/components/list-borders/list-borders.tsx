import { useBordersUserHook } from '@/borders/hooks/use-borders-user.hook';
import { UserBorderEntity } from '@/borders/models/entities/user-border.entity';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { quantityBorderToRank } from '@/ranking/utils/quantity-border-to-rank';
import { InfiniteScrollObserver } from '@/shared/components/infinite-scroll/infinite-scroll';
import {
  BtnPrimary,
  InputOutline,
  LensSvg,
  Typography,
} from '@embeeorg/ui-kit';
import { useState } from 'react';
import { BorderRank } from '../border-rank/border-rank';
import styles from './list-borders.module.css';

interface Props {
  id: string;
}

export function ListBorders({ id }: Props) {
  const [form, setForm] = useState({ search: '' });
  const [search, setSearch] = useState<string>('');
  const { isLoading, isError, data, isFetching, hasNextPage, fetchNextPage } =
    useBordersUserHook({
      id,
      filterByName: search,
    });

  const borders = data?.pages?.flatMap((page) => page.borders) || [];

  const [isTouched, setIsTouched] = useState<boolean>(false);

  if (isError) return <div>Error: Falló la weá</div>;

  const callbackSort = (a: UserBorderEntity, b: UserBorderEntity) => {
    if (a.special === b.special) return b.quantity - a.quantity;

    return a.special ? -1 : 1;
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(form.search);
  };

  return (
    <div className={styles.container}>
      <form
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          gap: 25,
          width: '100%',
        }}
        onSubmit={handleOnSubmit}
      >
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
            value={form.search}
            onChange={(e) => setForm({ search: e.target.value })}
          />
        </div>
        <BtnPrimary type="submit" disabled={form.search.length < 3}>
          Buscar
        </BtnPrimary>
      </form>
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
