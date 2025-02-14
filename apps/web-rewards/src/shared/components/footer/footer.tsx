import { EmbeeLogo } from '@/shared/logos/embee-logo';
import { Typography } from '@embeeorg/ui-kit';
import { Link } from 'react-router';
import { Collaborator } from '../collaborator/collaborator';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.detail}>
        <Typography
          variant="p"
          family="secondary"
          color="secondary-light"
          size="base"
          weight="semibold"
          style={{
            textShadow: '0 0 10px #000',
          }}
        >
          Inspirado en{' '}
          <Link
            to="https://manz.dev/manzcards/"
            target="_blank"
            style={{
              textDecoration: 'none',
              fontWeight: 700,
              color: 'var(--ui-kit-neutral-200)',
            }}
          >
            Manzdev
          </Link>{' '}
          y{' '}
          <Link
            to="https://cards.uxanarangel.com/"
            target="_blank"
            className={styles['nav-link']}
          >
            AnaRangel
          </Link>
          .
        </Typography>
        <Typography
          variant="p"
          family="secondary"
          color="secondary-light"
          size="base"
          weight="semibold"
          style={{
            textShadow: '0 0 10px #000',
          }}
        >
          Mención honorífica a{' '}
          <Link
            to="https://uxcorprangel.github.io/"
            target="_blank"
            className={styles['nav-link']}
          >
            UX Corp Rangel
          </Link>{' '}
          por su increíble trabajo e inspiración dentro de la comunidad.
        </Typography>

        <Typography
          variant="p"
          family="secondary"
          color="secondary-light"
          size="base"
          weight="regular"
          style={{
            textShadow: '0 0 10px #000',
          }}
        >
          ¡Síguelos en sus redes y estén atentos a futuros proyectos! ¡Muchas
          gracias!
        </Typography>
      </div>
      <Link
        to="https://links.embeejayz.com/"
        target="_blank"
        className={`${styles['nav-link']} ${styles['nav-embee']}`}
      >
        <EmbeeLogo /> Embeejayz
      </Link>
      <div className={styles['collaborators-container']}>
        <Typography
          variant="p"
          family="secondary"
          color="secondary-light"
          size="xl"
          weight="semibold"
          style={{
            textShadow: '0 0 10px #000',
          }}
        >
          Colaboradores
        </Typography>
        <div className={styles['collaborators']}>
          <Collaborator
            username="GountzJs"
            url="https://github.com/GountzJs"
            imgUrl="gountz"
          />
          <Collaborator
            username="Su1zide"
            url="https://www.instagram.com/su1zide/"
            imgUrl="su1zide"
          />
        </div>
      </div>
    </footer>
  );
}
