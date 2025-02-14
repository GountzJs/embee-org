import { ExampleBorder } from '@/borders/components/example-border/example-border';
import { CardEmbee } from '@/shared/components/card-embee/card-embee';
import { MainPage } from '@/shared/components/main-page/main-page';
import { Typography } from '@embeeorg/ui-kit';
import { Link } from 'react-router';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <MainPage className={styles['main-container']}>
      <section className={styles['card-presentation']}>
        <CardEmbee>
          <Typography
            variant="h1"
            family="primary"
            color="primary"
            size="3xl"
            weight="extrabold"
          >
            Recompensas coleccionables
          </Typography>
          <Typography
            variant="p"
            family="secondary"
            color="primary"
            size="lg"
            weight="regular"
          >
            Agradecemos cada pequeño apoyo a este proyecto, por lo que decidimos
            crear coleccionables basados en el competitivo de{' '}
            <strong>
              <i>League of Legends</i>
            </strong>{' '}
            y en el canal de{' '}
            <strong>
              <i>Embeejayz</i>
            </strong>{' '}
            para ustedes. ¡Esperamos que sean de su agrado y que continúen
            acompañándonos en las partidas de T1!
          </Typography>
        </CardEmbee>
      </section>
      <Typography
        variant="h2"
        family="primary"
        color="white"
        size="4xl"
        weight="extrabold"
      >
        Detalles de las recompensas
      </Typography>
      <section className={styles['section-container']}>
        <div className={styles['border-detail-container']}>
          <ExampleBorder />
          <div className={styles['border-detail']}>
            <Typography
              variant="h3"
              family="primary"
              color="primary-light"
              size="4xl"
              weight="extrabold"
            >
              Bordes clasificatorios
            </Typography>
            <Typography
              variant="p"
              family="secondary"
              color="secondary"
              size="lg"
              weight="semibold"
            >
              Un coleccionable con los distintos proplayers que han dejado su
              huella en la escena competitiva, destacando sus mejores momentos
              en diversas competencias internacionales y locales.
            </Typography>
            <Typography
              variant="p"
              family="secondary"
              color="secondary"
              size="lg"
              weight="semibold"
            >
              Con un ranking basado en la cantidad de cartas repetidas que
              tengas, se adapta a tu avatar y usuario de Twitch, además de
              incluir hechizos personalizables.
            </Typography>
            <Typography
              variant="p"
              family="secondary"
              color="secondary"
              size="lg"
              weight="semibold"
            >
              ✨ Ven al stream durante los partidos de T1, ¡entregaremos
              recompensas únicas en vivo!
            </Typography>
            <Typography
              variant="p"
              family="secondary"
              color="secondary"
              size="lg"
              weight="extrabold"
            >
              ¿Qué esperas para buscar a tu ídolo?
            </Typography>
            <Link to={'https://www.twitch.tv/embeejayz'} target="_blank">
              <Typography
                variant="p"
                family="secondary"
                color="white"
                size="lg"
                weight="extrabold"
                style={{
                  textDecoration: 'none',
                  backgroundColor: 'var(--ui-kit-twitch)',
                  padding: '8px 26px',
                  borderRadius: '6px',
                }}
              >
                Ven al stream
              </Typography>
            </Link>
          </div>
        </div>
      </section>
    </MainPage>
  );
}
