'use client';
import { EmbeeLogo } from '@/shared/components/embee-logo';
import { HomeIcon, RankingIcon } from '@/shared/svgs/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './navbar.module.css';

const getColor = ({
  isPath,
  isHover,
}: {
  isPath: boolean;
  isHover: boolean;
}) => {
  if (isPath) return 'var(--ui-kit-secondary-400)';
  if (isHover) return 'var(--ui-kit-primary-500)';
  return 'var(--ui-kit-neutral-100)';
};

const HomeLink = () => {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState(false);

  const isPath = pathname === '/' || pathname === '';

  return (
    <Link
      href="/"
      className={`${styles['nav-link']} ${styles['nav-link-icon']} ${isPath && styles['nav-link-active']}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <HomeIcon height={40} width={40} color={getColor({ isPath, isHover })} />
      Inicio
    </Link>
  );
};

const RankingLink = () => {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState(false);
  const isPath = pathname === '/ranking';

  return (
    <Link
      href="/ranking"
      className={`${styles['nav-link']} ${styles['nav-link-icon']} ${isPath && styles['nav-link-active']}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <RankingIcon
        height={40}
        width={40}
        color={getColor({ isPath, isHover })}
      />
      Clasificatoria
    </Link>
  );
};

export function Navbar() {
  return (
    <nav className={styles['nav-container']}>
      <Link href="/" className={styles['nav-link']}>
        <EmbeeLogo />
        Recompensas
      </Link>
      <HomeLink />
      <RankingLink />
    </nav>
  );
}
