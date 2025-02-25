'use client';
import { staticUrl } from '@/core/client-settings';
import { HomeIcon, RankingIcon } from '@/shared/svgs/icons';
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';

const HomeLink = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href="/"
      className={`${styles['nav-link']} ${styles['nav-link-icon']}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <HomeIcon
        height={40}
        width={40}
        color={isHover ? 'var(--ui-kit-primary-500)' : '#fff'}
      />
      Inicio
    </Link>
  );
};

const RankingLink = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      href="/ranking"
      className={`${styles['nav-link']} ${styles['nav-link-icon']}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <RankingIcon
        height={40}
        width={40}
        color={isHover ? 'var(--ui-kit-primary-500)' : '#fff'}
      />
      Clasificatoria
    </Link>
  );
};

export function Navbar() {
  return (
    <nav className={styles['nav-container']}>
      <Link href="/" className={styles['nav-link']}>
        <img
          className={styles['avatar']}
          src={`${staticUrl}/favicon.ico`}
          loading="eager"
          width={50}
          height={50}
          alt="Embeejayz avatar"
        />
        Recompensas
      </Link>
      <HomeLink />
      <RankingLink />
    </nav>
  );
}
