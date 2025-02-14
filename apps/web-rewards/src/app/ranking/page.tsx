import { ListRanking } from '@/ranking/components/list-ranking/list-ranking';
import { useSearchUsers } from '@/users/hooks/use-search-users.hook';
import { Dropdown, InputOutline } from '@embeeorg/ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './page.module.css';

export default function RankingPage() {
  const [search, setSearch] = useState<string>('');
  const { error, data, isLoading } = useSearchUsers({ username: search });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const getError = (): string | undefined => {
    if (search.length < 3)
      return 'Ingrese al menos 3 carácteres para iniciar la búsqueda';
    if (data.length === 0)
      return 'No se han encontrado usuarios con el nombre de usuario ingresado.';
    if (error) return error;
    return undefined;
  };

  return (
    <main className={styles.container}>
      <form
        style={{ position: 'relative', width: '500px', maxWidth: '80%' }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <InputOutline
          placeholder="Buscar por nombre de usuario"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Dropdown.Box isOpen={isOpen} error={getError()} isLoading={isLoading}>
          {data.map(({ id, username, avatar }) => (
            <Dropdown.Item
              key={id}
              className={styles['item-option']}
              onClick={() => navigate(`/user/${id.replace('?', '')}`)}
            >
              <img
                src={avatar}
                loading="lazy"
                alt={`Avatar ${username}`}
                width={30}
                height={30}
              />
              {username}
            </Dropdown.Item>
          ))}
        </Dropdown.Box>
      </form>
      <ListRanking />
    </main>
  );
}
