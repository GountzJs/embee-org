import { Collaborator } from '@/shared/components/collaborator';
import Link from 'next/link';
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.detail}>
        <p>
          Inspirado en{' '}
          <Link
            href="https://manz.dev/manzcards"
            target="_blank"
            className={styles['nav-link']}
          >
            Manzdev
          </Link>{' '}
          y{' '}
          <Link
            href="https://cards.uxanarangel.com"
            target="_blank"
            className={styles['nav-link']}
          >
            AnaRangel
          </Link>
          .
        </p>
        <p>
          Mención honorífica a{' '}
          <Link
            href="https://uxcorprangel.github.io/"
            target="_blank"
            className={styles['nav-link']}
          >
            UX Corp Rangel
          </Link>{' '}
          por su increíble trabajo e inspiración dentro de la comunidad.
        </p>

        <p>
          ¡Síguelos en sus redes y estén atentos a futuros proyectos! ¡Muchas
          gracias!
        </p>
      </div>
      <Link
        href="https://links.embeejayz.com"
        target="_blank"
        className={styles['nav-link']}
      >
        {/* <EmbeeLogo /> Embeejayz */}
      </Link>
      <div className={styles['collaborators-container']}>
        <p>Colaboradores:</p>
        <div className={styles['collaborators']}>
          <Collaborator
            username="GountzJs"
            socialUrl="https://github.com/GountzJs"
            url="/gountz.png"
          />
          <Collaborator
            username="Su1zide"
            socialUrl="https://www.instagram.com/su1zide/"
            url="/su1zide.png"
          />
        </div>
      </div>
    </footer>
  );
}
