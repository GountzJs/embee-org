import * as Navbar from '@/shared/components/navbar/navbar';
import { useLocation } from 'react-router';

const homePath = '/';

const rankingPath = '/ranking';

export function GlobalNavigation() {
  const location = useLocation();

  const isHome = location.pathname === homePath || location.pathname === '';

  const isRanking = location.pathname === rankingPath;

  return (
    <Navbar.Box>
      <Navbar.Item to={homePath} selectable={isHome}>
        Inicio
      </Navbar.Item>
      <Navbar.Item to={rankingPath} selectable={isRanking}>
        Clasificatoria
      </Navbar.Item>
    </Navbar.Box>
  );
}
