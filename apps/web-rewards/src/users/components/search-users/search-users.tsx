import { useSearchUsers } from '@/users/hooks/use-search-users.hook';
import { Dropdown, InputOutline, LensSvg } from '@embeeorg/ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './search-users.module.css';

export function SearchUsers() {
  const [search, setSearch] = useState<string>('');
  const { error, data, isLoading } = useSearchUsers({ username: search });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const getError = (): string | undefined => {
    if (search.length < 3)
      return 'Ingrese al menos 3 carácteres para iniciar la búsqueda';
    if (data.length === 0)
      return 'No se han encontrado usuarios con el nombre de usuario ingresado.';
    if (error) return error;
    return undefined;
  };

  return (
    <form
      className={styles.container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div style={{ width: '100%', position: 'relative' }}>
        <LensSvg
          size={25}
          className={styles['icon-search']}
          color={isTouched ? 'var(--ui-kit-secondary-400)' : 'white'}
        />
        <InputOutline
          className={styles['input-search']}
          placeholder="Buscar"
          value={search}
          onFocus={() => setIsTouched(true)}
          onBlur={() => setIsTouched(false)}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Dropdown.Box
        isOpen={isOpen || isTouched}
        error={getError()}
        isLoading={isLoading}
      >
        {data.map(({ id, username, avatar }) => (
          <Dropdown.Item
            key={id}
            className={styles['item-option']}
            onClick={() => navigate(`/user/${id.replace('?', '')}`)}
          >
            <img
              className={styles.avatar}
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
  );
}
