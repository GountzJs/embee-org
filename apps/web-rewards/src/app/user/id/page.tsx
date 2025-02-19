import { FormSearch } from '@/borders/components/list-borders/form-search/form-search';
import { ListBorders } from '@/borders/components/list-borders/list-borders';
import { BorderSort } from '@/borders/models/enums/border-sort';
import { BordersOrderBy } from '@/borders/models/enums/borders-order-by.enum';
import { UserProfile } from '@/users/components/user-profile/user-profile';
import { DotsSpinner } from '@embeeorg/ui-kit';
import { useState } from 'react';
import { useParams } from 'react-router';
import styles from './page.module.css';

export default function UserIdPage() {
  const { id } = useParams();
  const [filters, setFilters] = useState({
    search: '',
    orderBy: BordersOrderBy.Rank,
    sort: BorderSort.Desc,
  });

  if (!id)
    return (
      <div className={styles.container}>
        <DotsSpinner size={100} />
      </div>
    );

  const handleChangeFilters = ({
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
    <main className={styles.container}>
      <article className={styles['profile-container']}>
        <UserProfile id={id} />
        <FormSearch
          changeFilters={handleChangeFilters}
          removeSearch={() =>
            setFilters({
              ...filters,
              search: '',
            })
          }
        />
      </article>
      <section className={styles['borders-section']}>
        <ListBorders
          id={id}
          orderBy={filters.orderBy}
          sort={filters.sort}
          search={filters.search}
        />
      </section>
    </main>
  );
}
